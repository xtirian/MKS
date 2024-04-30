import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";
//import Header from '../components/Header';
//import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
          {/* <Header /> */}
          {/* <Sidebar /> */}
        <div>
          <Component {...pageProps} />
        </div>
    </QueryClientProvider>
  );
}

export default MyApp;
 