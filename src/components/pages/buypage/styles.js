import styled from "styled-components";

export const BuyContainer = styled.section`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const BuyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 18px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export const BuyAside = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 353px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const BuyArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 727px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
