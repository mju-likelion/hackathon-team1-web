import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import locker from "../assets/images/Locker.svg";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

const Header = ({ isVisible }) => {
  // Main 에서는 $isVisible이 false가 되어야 합니다.

  const navigate = useNavigate();

  return (
    <Container>
      <Logo
        src={logo}
        alt="로고 이미지"
        $isVisible={isVisible}
        onClick={() => navigate("/")}
      />
      <Locker src={locker} alt="보관함 이미지" />
      <Select />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  padding: 0px 33px;
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.15);
`;

const Logo = styled.img`
  justify-self: start;
  margin-right: auto;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  width: 300px;
  height: 58px;
  &:hover {
    cursor: pointer;
  }
`;

const Locker = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;
  &:hover {
    cursor: pointer;
  }
`;
