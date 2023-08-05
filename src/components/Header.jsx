import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import Select from "./Select";

const Header = ({ isVisible }) => {
  // Main 에서는 $isVisible이 false가 되어야 합니다.
  return (
    <Container>
      <Logo src={logo} alt="로고 이미지" $isVisible={isVisible} />
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
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  width: 300px;
  height: 58px;
  &:hover {
    cursor: pointer;
  }
`;
