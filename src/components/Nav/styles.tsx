import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type NavStyleTypes = {
  isActive?: boolean;
};

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 0rem;
`;

export const NavItem = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavLists = styled.li`
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  margin: 0rem 1.25rem;
  cursor: pointer;
  ${({ isActive }: NavStyleTypes) =>
    isActive
      ? css`
          color: #0a2640;
          background: #ffffff;
          border-radius: 24px;
          padding: 8px 40px;
        `
      : css`
          color: #ffffff;
        `};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  ${({ isActive }: NavStyleTypes) =>
    isActive
      ? css`
          color: #0a2640;
        `
      : css`
          color: #ffffff;
        `};
`;
