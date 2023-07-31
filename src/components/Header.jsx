import styled from "styled-components";
import logo from "../assets/Logo.svg";
import Select from "./Select";

const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="로고 이미지" />
      <Select />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 117px;
  padding: 0px 33px;
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.15);
`;

const Logo = styled.img`
  width: 300px;
  height: 58px;
  &:hover {
    cursor: pointer;
  }
`;
