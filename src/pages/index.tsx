import { NextPage } from "next";
import HomeScreen from "../components/HomeScreen";
import Cards from "../components/Cards";
import Customers from "../components/Customers";
import CarrouselDocument from "../components/CarrouselDocument";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Head from "next/head";

import { lazy } from "@loadable/component";
import ShouldMessageCookies from "../shared/components/ShouldMessageCookies";

const OtherComponent = lazy(() => import("../components/HomeScreen"));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Legal Design - Bits Academy </title>
        <meta
          name="description"
          content="Tornamos documentos jurídicos mais amigáveis. Legal Design e Bits Academy "
        />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Legal Design - Bits Academy"
          key="ogtitle"
        />
        +{" "}
        <meta
          property="og:description"
          content="Entender um documento jurídico pode ser uma tarefa muito complexa. Com o Legal Design, além de tornar a comunicação mais fácil, você gera mais vendas, aumenta a satisfação dos clientes, elimina a burocracia, evita inadimplemento e torna melhor a experiência do usuário."
          key="ogdesc"
        />
        <meta
          property="og:url"
          content={"http://localhost:3000/"}
          key="ogurl"
        />
        <meta
          property="og:site_name"
          content="Legal Design - Bits Academy"
          key="ogsitename"
        />
        <meta property="og:image" content="" key="ogimage" />
        <meta name="twitter:card" content="Legal Design" key="twcard" />
        <meta name="twitter:creator" content="Bits Academy" key="twhandle" />
      </Head>

      <HomeScreen />
      <Cards />
      <Customers />
      <CarrouselDocument />
      <Statistics />
      <Testimonials />
      <ShouldMessageCookies />
    </>
  );
};

export default Home;
