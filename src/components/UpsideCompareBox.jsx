import { styled } from "styled-components";
import CloseIcon from "../assets/images/CloseIcon.svg";
import LargeButton from "./LargeButton";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

/*보험이 있을 경우 컴포넌트*/
const UpsideCompareBox = ({ testData, onDelete }) => {
  const { infoId, productName, companyName, insuranceLogo } = testData;
  const navigate = useNavigate();
  const pageLanguage = useRecoilValue(LanguageAtom);
  const goDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <LoanContainer>
      <CloseButton
        src={CloseIcon}
        alt="close-button"
        onClick={() => onDelete(infoId)}
      />
      <LoanArea>
        <LoanBox>
          <LoanImage src={insuranceLogo.imageUrl} alt="loan-image" />
          <LoanContentBox>
            <MainTitle>{productName}</MainTitle>
            <SubTitle>{companyName}</SubTitle>
            <LargeButton
              text={
                pageLanguage === "KOR"
                  ? "상세 페이지 이동"
                  : pageLanguage === "ENG"
                  ? "Go to detail page"
                  : "进入详情页"
              }
              handleClick={() => goDetail(infoId)}
            />
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
  font-size: 23px;
  font-weight: 600;
`;

const SubTitle = styled.p`
  font-size: 21px;
  margin-top: 19px;
  margin-bottom: 27px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

export default UpsideCompareBox;
