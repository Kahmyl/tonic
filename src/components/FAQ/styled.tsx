import styled from "styled-components";

export const FaqContainer = styled.div`
  margin: 7.75rem 9.375rem;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 3.5rem;
`;
export const FaqWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 56px;
    color: #000000;
    margin-right: 3.125rem;
    flex: 50%;
  }
`;

export const DropWrapper = styled.div`
  margin-left: 3.125rem;
  flex: 50%;
  > * {
    &:first-child {
      padding-top: 0rem;
    }
  }
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 1rem;
  padding-top: 2rem;
  justify-content: space-between;
  span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
  }
`;
