import styled from "styled-components";

export const BlogContainer = styled.div`
  margin: 4.375rem 9.375rem;
`;

export const BlogHeader = styled.div`
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

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6.25rem;
`;

export const BlogCard = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  p {
    padding: 0;
    margin: 0;
    margin: 1.5rem 0rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #0a2640;
    margin: 0;
    margin-right: 1rem;
  }
  span {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #777777;
    margin: 0;
    padding: 0;
  }
`;

export const CardProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
`;

export const CardProfileText = styled.div`
  margin-left: 1rem;
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #000000;
    margin: 0;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  button {
    border: 2px solid #0a2640;
    border-radius: 56px;
    padding: 16px 56px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    background: #ffffff;
    margin: 5.25rem 0rem;
    cursor: pointer;
  }
`;
