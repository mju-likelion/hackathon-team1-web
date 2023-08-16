import Locker from "../assets/images/Locker.svg";
import Call from "../assets/images/Call.svg";
import XIcon from "../assets/images/XIcon.svg";
import { styled } from "styled-components";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const Modal = ({ iconName, callNum, handleModalClose }) => {
  // iconName 은 Call, LockerIn, LockerFull 로 넘겨줌

  const pageLanguage = useRecoilState(LanguageAtom);

  const iconImg = () => {
    if (iconName === "Call") {
      return Call;
    } else return Locker;
  };

  const infoText = () => {
    if (iconName === "Call")
      if (pageLanguage[0] === "KOR") return "설계사 연락처\n" + callNum;
      else if (pageLanguage[0] === "ENG")
        return "Insurance Agent Contact Information\n" + callNum;
      else return "保险规划师联系方式\n" + callNum;
    else if (iconName === "LockerIn")
      if (pageLanguage[0] === "KOR") return "비교함에\n담았습니다!";
      else if (pageLanguage[0] === "ENG")
        return "Add to compare\nbox complete!";
      else return "已加入比较篮！";
    else {
      if (pageLanguage[0] === "KOR") return "비교함이\n꽉 찼습니다!";
      else if (pageLanguage[0] === "ENG")
        return "The comparison\ncart is full!";
      else return "比较篮已满！";
    }
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <Background>
        <ModalBox>
          <XBtn onClick={handleModalClose}>
            <XImg src={XIcon} alt="XIcon" />
          </XBtn>
          <Content>
            <IconBox>
              <IconImg src={iconImg()} alt="Icon" />
            </IconBox>
            <Text>{infoText()}</Text>
          </Content>
        </ModalBox>
      </Background>
    </div>,
    document.getElementById("modal-root") // 외부 DOM 노드 선택
  );
};

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
`;

const ModalBox = styled.div`
  width: 670px;
  height: 407px;
  background-color: ${({ theme }) => theme.colors.WHITE};
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
  width: 470px;
  height: 90px;
  margin: auto;
  margin-top: 110px;
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
  font-size: 35px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.BLACK};
  white-space: pre-wrap;
  line-height: 120%;
`;
export default Modal;
