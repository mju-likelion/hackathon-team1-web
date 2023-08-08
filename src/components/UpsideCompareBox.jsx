import { styled } from "styled-components";
import CloseIcon from "../assets/CloseIcon.svg";
import Lotte from "../assets/Lotte.svg";
import LargeButton from "./LargeButton";

/*보험이 있을 경우 컴포넌트*/
const UpsideCompareBox = ({ testData }) => {
  const { id, loanName, companyName } = testData;
  const handleDelete = () => {
    const newArr = {};
    localStorage.setItem(id, JSON.stringify(newArr));
  };

  return (
    <LoanContainer>
      <LoanBox>
        <CloseButton
          src={CloseIcon}
          alt="close-button"
          onClick={() => handleDelete()}
        />
        <LoanImage src={Lotte} alt="loan-image" />
        <LoanContentBox>
          <MainTitle>{loanName}</MainTitle>
          <SubTitle>{companyName}</SubTitle>
          <LargeButton text="상세 페이지 이동" />
        </LoanContentBox>
      </LoanBox>
    </LoanContainer>
  );
};

const LoanContainer = styled.div`
  width: 308px;
  height: 492px;
  margin-left: 35px;
  margin-right: 43px;
`;

const CloseButton = styled.img`
  cursor: pointer;
  align-self: flex-start;
  margin: 35px 35px;
`;

const LoanBox = styled.div`
  width: 308px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
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
