import { useEffect } from "react";
import Head from "next/head";

import * as $ from "@/styles/pages/konfigurator/index.styled";

import Wardrobe from "@/components/elements/Wardrobe";
import InputSectionModule from "@/components/inputs/temp_InputSectionModule";
import InputSectionsCount from "@/components/inputs/InputSectionsCount";
import InputWardrobeType from "@/components/inputs/InputWardrobeType";
import InputWardrobeSize from "@/components/inputs/InputWardrobeSize";
import InputDoorsCount from "@/components/inputs/InputDoorsCount";
import InputProfilesType from "@/components/inputs/InputProfilesType";

import useMainStore from "@/stores/useMainStore";
import { fetchProducts } from "@/utils/fetchProducts";

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}

const Index = ({ products }) => {
  const { setProductsApi, productsAPI } = useMainStore((state) => ({
    setProductsApi: state.setProductsApi,
    productsAPI: state.productsAPI,
  }));

  useEffect(() => {
    setProductsApi(products);
  }, [products]);

  return (
    <>
      <Head>
        <title>Nakonfigurujte si vlastnu skriňu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <$.Main>
          <Wardrobe />
        </$.Main>
      </>
      <InputWardrobeType />
      <InputWardrobeSize />
      <$.Inputs>
        <InputSectionModule id={1} />
        <InputSectionModule id={2} />
        <InputSectionModule id={3} />
      </$.Inputs>
      <InputSectionsCount />
      <InputDoorsCount />
      <InputProfilesType />
    </>
  );
};

export default Index;
