import ProductCard from "@/components/ProductCard/ProductCard.component";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - xTirian</title>
      </Head>
      <div>
        <h1>Home</h1>
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
