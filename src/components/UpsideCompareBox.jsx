import { styled } from "styled-components";
import CloseIcon from "../assets/CloseIcon.svg";
import Lotte from "../assets/Lotte.svg";
import LargeButton from "./LargeButton";

const UpsideCompareBox = () => {
  return (
    <LoanContainer>
      <CloseButton src={CloseIcon} alt="close-button" />
      <LoanBox>
        <LoanImage src={Lotte} alt="loan-image" />
        <LoanContentBox>
          <MainTitle>뭐뭐뭐보장보험</MainTitle>
          <SubTitle>롯데손해보험</SubTitle>
          <LargeButton text="상세 페이지 이동" />
        </LoanContentBox>
      </LoanBox>
    </LoanContainer>
  );
};

const LoanContainer = styled.div`
  width: 308px;
  height: 492px;
`;

const CloseButton = styled.img`
  cursor: pointer;
  margin: 35px 35px;
`;

const LoanBox = styled.div`
  width: 308px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoanImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
`;

const LoanContentBox = styled.div`
  width: 300px;
  height: 168px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.p`
  font-size: 35px;
  font-weight: 600;
`;

const SubTitle = styled.p`
  font-size: 25px;
  margin-top: 19px;
  margin-bottom: 27px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

export default UpsideCompareBox;
