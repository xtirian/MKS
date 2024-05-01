import ProductCard from "@/components/ProductCard/ProductCard.component";
import useGetProducts from "@/services/api/useGetProducts";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { Fragment, useEffect } from "react";

export default function Home() {
  const { data, error, isLoading } = useGetProducts({
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "DESC",
  });

  useEffect(() => {
    console.log(data);
    console.log(error);
    console.log(isLoading);
  }, [data, error, isLoading]);

  return (
    <Fragment>
      <Head>
        <title>Home - xTirian</title>
      </Head>
      <div>
        <h1>Home</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Ops... tivemos um problema</p>}
        {data &&
          data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={product.description}
              photo={product.photo}
              price={product.price}
            />
          ))}
        <ProductCard
          id={0}
          name={"HiperX Headset"}
          brand={"JBL"}
          description={"Redesigned from scratch and completely revised."}
          photo={
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp"
          }
          price={100}
        />
      </div>
    </Fragment>
  );
}
