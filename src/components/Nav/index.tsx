import { NavContainer, NavItem, NavLink, NavLists } from "./styles";
import Logo from "../../Assets/Images/logo.svg";

const NavBar = () => {
  return (
    <NavContainer>
      <div>
        <img src={Logo} />
      </div>
      <NavItem>
        <NavLists>
          <NavLink to="/">Product</NavLink>
        </NavLists>
        <NavLists>
          <NavLink to="/">Service</NavLink>
        </NavLists>
        <NavLists>
          <NavLink to="/about">About</NavLink>
        </NavLists>
        <NavLists isActive={true}>
          <NavLink isActive={true} to="/login">
            Log in
          </NavLink>
        </NavLists>
      </NavItem>
    </NavContainer>
  );
};

export default NavBar;
