import React from "react";
import { Form, Label, Li, Ul } from "/src/styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Checkbox } from "/src/components/ui/checkbox/checkbox";
//import { CheckLabel } from "./styles";

function SelectProduct({ products }) {
  return (
    <Form $width={353}>
      <Title size={TitleSize.H5}>Выберите продукты</Title>
      {products?.map ? (
        <Ul>
          {products.map((product) => (
            <Li>
              <Label id={product.id}>{product.title}</Label>
              <Checkbox htmlFor={product.id} />
            </Li>
          ))}
        </Ul>
      ) : null}
    </Form>
  );
}

export default SelectProduct;
