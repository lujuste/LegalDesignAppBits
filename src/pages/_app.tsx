import { NextPage } from "next";
import { AppProps } from "next/app";

import NextProgress from "nextjs-progressbar";

import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../shared/styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawer";
import { Layout } from "../shared/layout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "../shared/styles/slider.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { CookieConsentProvider } from "../contexts/CookieConsent";

const queryClient = new QueryClient();

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <CookieConsentProvider>
          <ToastContainer />
          <NextProgress
            color="#CD3266"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
          />
          <SidebarDrawerProvider>
            <ChakraProvider resetCSS theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </SidebarDrawerProvider>
        </CookieConsentProvider>
      </>
    </QueryClientProvider>
  );
};

export default MyApp;
