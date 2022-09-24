import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  background: #0a2640;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  z-index: 1;
  margin: 0rem 6.25rem;
  padding-bottom: 64px;
`;

export const BackgroungImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const HeroHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0.938rem 0rem 4rem 0rem;
`;

export const HeaderLeft = styled.div`
  margin-right: 4.375rem;
`;

export const HeaderRight = styled.div`
  margin-left: 4.375rem;
`;

export const HeroHeaderTitle = styled.h1`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 72px;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;
export const HeroHeaderText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #f1f1f1;
  margin: 0;
  padding: 1rem 0rem 2.5rem 0rem;
`;

export const HeroButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BuyTemplateButton = styled.button`
  background: #65e4a3;
  border: 2px solid #69e6a6;
  border-radius: 56px;
  padding: 1rem 3.5rem;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #0a2640;
  margin-right: 0.75rem;
  cursor: pointer;
`;
export const ExploreButton = styled.button`
  border: 2px solid #ffffff;
  border-radius: 56px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  background: #0a2640;
  padding: 1rem 3.5rem;
  margin-left: 0.75rem;
  cursor: pointer;
`;

export const HeroBase = styled.div`
  margin-top: 3.625rem;
`;
