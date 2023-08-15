import styled from "styled-components";
import logo from "../assets/images/Logo.svg";
import locker from "../assets/images/Locker.svg";
import Select from "./Select";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LogoAtom } from "../assets/atom/LogoAtom";

const Header = ({ isVisible }) => {
  const navigate = useNavigate();

  const [showLogo, setShowLogo] = useRecoilState(LogoAtom);

  const handleGoMain = () => {
    navigate("/");
    setShowLogo(false);
  };

  const handleGoLocker = () => {
    navigate("/compare");
    setShowLogo(true);
  };

  return (
    <Container>
      {showLogo ? (
        <Logo
          src={logo}
          alt="로고 이미지"
          $isVisible={isVisible}
          onClick={handleGoMain}
        />
      ) : (
        <EmptyBox></EmptyBox>
      )}
      <Locker src={locker} alt="보관함 이미지" onClick={handleGoLocker} />
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
  padding: 0 33px;
  z-index: 100;
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

const EmptyBox = styled.div`
  margin-right: auto;
  width: 300px;
  height: 58px;
`;
