import { styled } from "styled-components";
import SmallButton from "./SmallButton";
import InsuranceDetail from "./InsuranceDetail";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const InsuranceBox = ({ loanData }) => {
  const {
    infoId,
    insuranceLogo,
    insuranceAgeGroupStart,
    insuranceAgeGroupEnd,
    insuranceAgeGroup,
    premiumMale,
    premiumFemale,
    languages,
  } = loanData;

  const navigate = useNavigate();

  const pageLanguage = useRecoilValue(LanguageAtom);

  const imgUrl = insuranceLogo?.imageUrl;

  const goDetail = (infoId) => {
    navigate(`/detail/${infoId}`);
  };

  return (
    <>
      <ContentArea>
        <LeftBox>
          {imgUrl ? (
            <LoanImage src={imgUrl} alt="loan-image" />
          ) : (
            <div>loading</div>
          )}
        </LeftBox>
        <RightBox>
          <TopArea>
            <NameArea>
              <MainName>
                {pageLanguage === "KOR"
                  ? languages["insurance name"]["KR"]
                  : pageLanguage === "ENG"
                  ? languages["insurance name"]["EN"]
                  : languages["insurance name"]["CN"]}
              </MainName>
              <SubName>
                {pageLanguage === "KOR"
                  ? languages["insurance company"]["KR"]
                  : pageLanguage === "ENG"
                  ? languages["insurance company"]["EN"]
                  : languages["insurance company"]["CN"]}
              </SubName>
            </NameArea>
            <SmallButton
              text={
                pageLanguage === "KOR"
                  ? "자세히 보기"
                  : pageLanguage === "ENG"
                  ? "See More"
                  : "查看更多"
              }
              handleclick={() => goDetail(infoId)}
            />
          </TopArea>
          <BottomArea>
            <InsuranceDetail
              title={
                pageLanguage === "KOR"
                  ? "가입연령"
                  : pageLanguage === "ENG"
                  ? "Join age"
                  : "入学年龄"
              }
              content={`${insuranceAgeGroupStart}~${insuranceAgeGroupEnd}`}
              unit={
                pageLanguage === "KOR"
                  ? "세"
                  : pageLanguage === "ENG"
                  ? "years"
                  : "岁"
              }
            />
            <BreakLine />
            <InsuranceDetail
              title={
                pageLanguage === "KOR"
                  ? "가입연령대"
                  : pageLanguage === "ENG"
                  ? "Join Age Group"
                  : "订阅年龄组"
              }
              content={
                insuranceAgeGroup === 0
                  ? pageLanguage === "KOR"
                    ? "10대 이하"
                    : pageLanguage === "ENG"
                    ? "Under 10's"
                    : "10岁以下"
                  : insuranceAgeGroup
              }
              unit={
                insuranceAgeGroup !== 0
                  ? pageLanguage === "KOR"
                    ? "대"
                    : pageLanguage === "ENG"
                    ? "'s"
                    : "多岁"
                  : ""
              }
            />
            <BreakLine />
            <InsuranceDetail
              title={
                pageLanguage === "KOR"
                  ? "보험료"
                  : pageLanguage === "ENG"
                  ? "Premium"
                  : "优质的"
              }
              content={
                pageLanguage === "KOR"
                  ? `남 ${premiumMale.toLocaleString(
                      "en-US"
                    )}${"\n"}여 ${premiumFemale.toLocaleString("en-US")}`
                  : pageLanguage === "ENG"
                  ? `M ${premiumMale.toLocaleString(
                      "en-US"
                    )}${"\n"}F ${premiumFemale.toLocaleString("en-US")}`
                  : `男 ${premiumMale.toLocaleString(
                      "en-US"
                    )}${"\n"}女 ${premiumFemale.toLocaleString("en-US")}`
              }
              unit={
                pageLanguage === "KOR"
                  ? "원"
                  : pageLanguage === "ENG"
                  ? "won"
                  : "元"
              }
            />
            <BreakLine />
            <InsuranceDetail
              title={
                pageLanguage === "KOR"
                  ? "가입형태"
                  : pageLanguage === "ENG"
                  ? "Type"
                  : "订阅类型"
              }
              content={
                pageLanguage === "KOR"
                  ? languages["registration type"]["KR"]
                  : pageLanguage === "ENG"
                  ? languages["registration type"]["EN"]
                  : languages["registration type"]["CN"]
              }
            />
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
  width: 690px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainName = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const SubName = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

const BottomArea = styled.div`
  width: 780px;
  height: 61px;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const BreakLine = styled.div`
  width: 2px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  margin-left: 60px;
`;

export default InsuranceBox;
