import { useEffect } from "react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import Modal from "@/components/steps/Modal";
import ShowHideDoors from "@/components/steps/ui/ShowHideDoors";
import Header from "@/layouts/configurator/Header";
import WardrobeView from "@/layouts/configurator/WardrobeView";
import WardrobeConfig from "@/layouts/configurator/WardrobeConfig";
import Step4 from "@/components/steps/step4/Step4";
import Footer from "@/layouts/configurator/Footer";

import useMainStore from "@/stores/useMainStore";
import { fetchProducts } from "@/utils/fetchProducts";

import * as $ from "@/styles/pages/konfigurator/index.styled";

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

const Index = ({ products }) => {
  const { viewport, setProductsApi, currentStep, setViewport } = useMainStore(
    (state) => ({
      viewport: state.viewport,
      setProductsApi: state.setProductsApi,
      currentStep: state.currentStep,
      setViewport: state.setViewport,
    })
  );

  useEffect(() => {
    setProductsApi(products);
  }, [products]);

  useEffect(() => {
    setViewport(
      {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      [setViewport]
    );

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nakonfigurujte si vlastnu skriňu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      {currentStep.id !== 4 && (
        <$.WrapContent>
          <Toaster />
          <$.WrapView $height={viewport.height}>
            <ShowHideDoors />
            <Header />
            <WardrobeView />
          </$.WrapView>
          <$.WrapConfig $height={viewport.height}>
            <WardrobeConfig />
            <Footer />
          </$.WrapConfig>
        </$.WrapContent>
      )}
      {currentStep.id === 4 && (
        <>
          <ShowHideDoors isLastStep={true} />
          <Header />
          <Step4 />
        </>
      )}
    </>
  );
};

export default Index;
