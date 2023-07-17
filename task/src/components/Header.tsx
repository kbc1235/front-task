import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.header`
  width: 100svw;
  height: 100px;
  background-color: #e2e2e2;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  & > a{
    color: lightcoral;
    &:active,&:hover{
      color: lightgoldenrodyellow;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <Nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Signin"}>Signin</Link>
      </Nav>
    </HeaderBox>
  );
};

export default Header;
