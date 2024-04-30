import type { AppProps } from "next/app";
import Head from "next/head";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";
import { AppProvider } from "@/services/reduxProvider";

//import Header from '../components/Header';

import "@/styles/global.scss";
import { SideBar } from "@/components/sideBar/SideBar.component";
import { Header } from "@/components/header/Header.component";
import Footer from "@/components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>MKS Challenge - xTirian</title>
      </Head>
      <AppProvider>
        <Header />
        <main>
          <SideBar />
          <Component {...pageProps} />
        </main>
        <Footer />
      </AppProvider>

    </QueryClientProvider>
  );
}

export default MyApp;
