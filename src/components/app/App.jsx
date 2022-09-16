import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import comparisonList from "/src/mocks/comparisons";
import productList from "/src/mocks/products";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper comparisons={comparisonList} products={productList} />
    </>
  );
}
