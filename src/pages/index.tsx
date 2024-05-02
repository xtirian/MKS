import Grid42 from "@/components/grid4x2/Grid42.component";
import { Header } from "@/components/header/Header.component";
import ProductCard from "@/components/ProductCard/ProductCard.component";
import useGetProducts from "@/services/api/useGetProducts";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  const { data, error, isLoading } = useGetProducts({
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "DESC",
  });

  return (
    <Fragment>
      <Head>
        <title>Home - xTirian</title>
      </Head>
      <Header hasCart={true} />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid42>
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
        </Grid42>
      </div>
    </Fragment>
  );
}
