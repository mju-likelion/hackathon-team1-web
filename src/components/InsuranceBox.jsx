import { styled } from "styled-components";
import SmallButton from "./SmallButton";
import InsuranceDetail from "./InsuranceDetail";
import { useNavigate } from "react-router-dom";

const InsuranceBox = ({ loanData }) => {
  const {
    infoId,
    insuranceLogo,
    productName,
    companyName,
    insuranceAgeGroupStart,
    insuranceAgeGroupEnd,
    premiumMale,
    premiumFemale,
    registrationType,
  } = loanData;

  const navigate = useNavigate();

  const goDetail = (infoId) => {
    navigate(`/detail/${infoId}`);
  };

  return (
    <>
      <ContentArea>
        <LeftBox>
          <LoanImage src={insuranceLogo.imageUrl} alt="loan-image" />
        </LeftBox>
        <RightBox>
          <TopArea>
            <NameArea>
              <MainName>{productName}</MainName>
              <SubName>{companyName}</SubName>
            </NameArea>
            <SmallButton
              text="자세히 보기"
              handleclick={() => goDetail(infoId)}
            />
          </TopArea>
          <BottomArea>
            <InsuranceDetail
              title="가입연령"
              content={`${insuranceAgeGroupStart}~${insuranceAgeGroupEnd}`}
              unit="세"
            />
            <BreakLine />
            <InsuranceDetail
              title="보험료"
              content={`남 ${premiumMale} / 여 ${premiumFemale}`}
              unit="원"
            />
            <BreakLine />
            <InsuranceDetail title="가입형태" content={registrationType} />
          </BottomArea>
        </RightBox>
      </ContentArea>
    </>
  );
};

const ContentArea = styled.div`
  width: 1170px;
  height: 220px;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 55px;
`;

const LeftBox = styled.div`
  width: 135px;
  height: 135px;
`;

const LoanImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 47px;
`;

const RightBox = styled.div`
  width: 880px;
  height: 135px;
`;

const TopArea = styled.div`
  width: 880px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const NameArea = styled.div`
  width: 660px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainName = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const SubName = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

const BottomArea = styled.div`
  width: 650px;
  height: 61px;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const BreakLine = styled.div`
  width: 2px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  margin-left: 150px;
`;

export default InsuranceBox;
