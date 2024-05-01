import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductModel } from "@/models/product";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async ({
  page,
  rows,
  sortBy,
  orderBy,
}: IGetProductsOptions) => {
  const url = `${process.env.BASE_API_URL}?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
  const response = await axios.get<IResponse>(url);
  return response.data.products;
};

const useGetProducts = (options: IGetProductsOptions) => {
  const { data, error, isLoading } = useQuery<ProductModel[], Error>({
    queryKey: ["products", options],
    queryFn: () => fetchProducts(options),
  });

  return { data, error, isLoading };
};

export default useGetProducts;

interface IGetProductsOptions {
  page: number;
  rows: number;
  sortBy: "id" | "name" | "price";
  orderBy: "ASC" | "DESC";
}

interface IResponse {
  products: ProductModel[];
}
