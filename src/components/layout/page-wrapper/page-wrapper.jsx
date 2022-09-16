import React from "react";
import Header from "/src/components/layout/header/header";
//import MainPage from "/src/components/pages/mainpage/mainpage";
import BuyPage from "/src/components/pages/buypage/buypage";
import Footer from "/src/components/layout/footer/footer";
import { PageWrapperMain } from "./styles";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <PageWrapperMain>
        <BuyPage {...prop} />
      </PageWrapperMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
