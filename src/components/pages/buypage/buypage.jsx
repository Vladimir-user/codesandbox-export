import React from "react";
import { BuyContainer, BuyRow } from "./styles";
import SelectProduct from "/src/components/blocks/select/select";

function BuyPage({ products }) {
  return (
    <BuyContainer>
      <BuyRow>
        <SelectProduct products={products} />
      </BuyRow>
    </BuyContainer>
  );
}

export default BuyPage;
