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
    premiumMale,
    premiumFemale,
    languages,
  } = loanData;

  const navigate = useNavigate();

  const pageLanguage = useRecoilValue(LanguageAtom);

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
              <MainName>
                {pageLanguage === "KOR"
                  ? languages["insurance name"].KR
                  : pageLanguage === "ENG"
                  ? languages["insurance name"].EN
                  : languages["insurance name"].CN}
              </MainName>
              <SubName>
                {pageLanguage === "KOR"
                  ? languages["insurance company"].KR
                  : pageLanguage === "ENG"
                  ? languages["insurance company"].EN
                  : languages["insurance company"].CN}
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
                  ? "보험료"
                  : pageLanguage === "ENG"
                  ? "Premium"
                  : "优质的"
              }
              content={
                pageLanguage === "KOR"
                  ? `남 ${premiumMale.toLocaleString(
                      "en-US"
                    )} / 여 ${premiumFemale.toLocaleString("en-US")}`
                  : pageLanguage === "ENG"
                  ? `M ${premiumMale.toLocaleString(
                      "en-US"
                    )} / F ${premiumFemale.toLocaleString("en-US")}`
                  : `男 ${premiumMale.toLocaleString(
                      "en-US"
                    )} / 女 ${premiumFemale.toLocaleString("en-US")}`
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
                  ? languages["registration type"].KR
                  : pageLanguage === "ENG"
                  ? languages["registration type"].EN
                  : languages["registration type"].CN
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
  width: 675px;
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
