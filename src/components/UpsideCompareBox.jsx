import { styled } from "styled-components";
import CloseIcon from "../assets/CloseIcon.svg";
import Lotte from "../assets/Lotte.svg";
import LargeButton from "./LargeButton";

/*보험이 있을 경우 컴포넌트*/
const UpsideCompareBox = ({ testData, onDelete }) => {
  const { id, loanName, company } = testData;

  return (
    <LoanContainer>
      <CloseButton
        src={CloseIcon}
        alt="close-button"
        onClick={() => onDelete(id)}
      />
      <LoanArea>
        <LoanBox>
          <LoanImage src={Lotte} alt="loan-image" />
          <LoanContentBox>
            <MainTitle>{loanName}</MainTitle>
            <SubTitle>{company}</SubTitle>
            <LargeButton text="상세 페이지 이동" />
          </LoanContentBox>
        </LoanBox>
      </LoanArea>
    </LoanContainer>
  );
};

const LoanContainer = styled.div`
  width: 308px;
  height: 659px;
  margin-left: 35px;
  margin-right: 43px;
`;

const LoanArea = styled.div`
  width: 300px;
  height: 404px;
`;

const CloseButton = styled.img`
  cursor: pointer;
  margin-top: 35px;
`;

const LoanBox = styled.div`
  width: 308px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 73px;
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
