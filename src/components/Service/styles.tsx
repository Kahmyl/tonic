import styled from "styled-components";

export const ServiceContainer = styled.div`
  margin: 4.375rem 9.375rem;
`;

export const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #777777;
    margin: 0;
    padding: 0.75rem 0rem;
  }
  h1 {
    padding: 0;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
    margin: 0;
    margin-bottom: 4.875rem;
  }
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6.25rem;
`;

export const ServiceCard = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    padding: 0;
    margin: 0;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
    margin-top: 1.5rem;
  }
  p {
    padding: 0;
    margin: 0;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #777777;
  }
`;

export const ExplorePage = styled.button`
  border: 0;
  margin: 0;
  background: #ffffff;
  border-bottom: 1px solid #0a2640;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  margin-top: 1.75rem;
  cursor: pointer;
  span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #0a2640;
    margin-right: 0.75rem;
  }
`;

export const ServiceSectionTwoWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 12.313rem;
  margin-bottom: 15rem;
`;

export const ServiceSectionThreeWrapper = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 12.313rem;
  margin-bottom: 20rem;
`;

export const MainImage = styled.img`
  width: auto;
  height: auto;
`;
export const FloatingImage = styled.img`
  position: absolute;
`;

export const SecTwoImage = styled.div`
  position: relative;
  margin-right: 4.688rem;
  ${FloatingImage} {
    right: 57px;
    top: 222px;
  }
`;

export const SecThreeImage = styled.div`
  position: relative;
  margin-left: 4.688rem;
  ${FloatingImage} {
    left: 48px;
    top: 304px;
  }
`;

export const SecTwoMargin = styled.div`
  margin-left: 4.688rem;
`;

export const ServiceSecTitle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  display: flex;
  color: #000000;
  margin-bottom: 1.375rem;
`;

export const SecTwoListText = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    margin-left: 1.688rem;
  }
`;
export const StartNow = styled.button`
  border: 0;
  padding: 16px 56px;
  background: #0a2640;
  border-radius: 56px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #ffffff;
  margin-top: 2.25rem;
  cursor: pointer;
`;

export const SecThreeMargin = styled.div`
  margin-right: 4.688rem;
  box-sizing: border-box;
`;

export const SecThreeListDark = styled.div`
  display: flex;
  align-items: center;
  background: #0a2640;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  span {
    margin-left: 1rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
  }
`;

export const SecThreeListLight = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  span {
    margin-left: 1rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
  }
`;
