import Locker from "../assets/images/Locker.svg";
import Call from "../assets/images/Call.svg";
import XIcon from "../assets/images/XIcon.svg";
import { styled } from "styled-components";

const Modal = ({ isCall, callNum, handleModalClose }) => {
  return (
    <Background>
      <ModalBox>
        <XBtn onClick={handleModalClose}>
          <XImg src={XIcon} alt="XIcon" />
        </XBtn>
        <Content>
          <IconBox>
            <IconImg src={isCall ? Call : Locker} alt="Icon" />
          </IconBox>
          <Text>
            {isCall ? "설계사 연락처\n" + callNum : "비교함에\n담았습니다!"}
          </Text>
        </Content>
      </ModalBox>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 670px;
  height: 407px;
  background-color: ${(props) => props.theme.colors.WHITE};
  border-radius: 25px;
`;

const XBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-top: 29px;
  margin-left: 29px;
`;

const XImg = styled.img`
  object-fit: fill;
`;

const Content = styled.div`
  width: 460px;
  height: 90px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 95px;
`;

const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  width: 274px;
  height: 84px;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.BLACK};
  white-space: pre-wrap;
  line-height: 120%;
`;
export default Modal;
