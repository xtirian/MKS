import { Header } from "@/components/header/Header.component";
import { useCartContext } from "@/services/useCases/useCartContext";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

const CheckoutPage: NextPage = () => {
  const { products } = useCartContext();
  const router = useRouter();

  useEffect(() => {
    if(products.length === 0) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Header hasCart={false} />
      <div>
        <h1>Checkout Page</h1>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.quantity}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default CheckoutPage;

