import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  background: #0a2640;
  padding: 6rem 9.375rem;
`;

export const TestimonialsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 64px;
    color: #ffffff;
    max-width: 44.75rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  top: 100px;
`;

export const LeftArrowIcon = styled.img`
  margin-right: 0.875rem;
`;

export const RightArrowIcon = styled.img`
  margin-left: 0.875rem;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.375rem;
  margin-top: 4.5rem;
  height: auto;
`;

export const TestimonialsCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 2.5rem;
  h1 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
  }
`;

export const CardProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
  }
`;

export const CardProfileText = styled.div`
  margin-left: 1rem;
  h1 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #0a2640;
    margin: 0;
    padding: 0;
  }
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    color: #0a2640;
    margin: 0;
  }
`;
