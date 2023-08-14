import { styled } from "styled-components";
import DetailBox from "../components/DetailBox";
import Box from "../assets/images/Box.svg";
import Protect from "../assets/images/Protect.svg";
import Price from "../assets/images/Price.svg";
import Calender from "../assets/images/Calender.svg";
import Guarantee from "../assets/images/Guarantee.svg";
import InformationBox from "../components/InformationBox";
import { AxiosDetail } from "../api/AxiosDetail";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import LargeButton from "../components/LargeButton";
import { Link } from "react-router-dom";

const Detail = () => {
  const [insurance, setInsurance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addCompare = () => {
    localStorage.setItem("insurances", JSON.stringify(insurance));
  };

  const fetchData = async () => {
    try {
      await AxiosDetail((res) => setInsurance(res));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const goSite = () => {
    // insurance.registrationLink로 이동
    <Link to={insurance.registrationLink}></Link>;
  };

  const insuranceArr = [
    {
      title: "가입연령",
      firstContent: insurance.insuranceAgeGroupStart,
      secondContent: insurance.insuranceAgeGroupEnd,
    },
    {
      title: "보험료",
      firstContent: insurance.premiumMale,
      secondContent: insurance.premiumFemale,
    },
  ];

  const mainArr = [
    {
      img: Protect,
      title: "예금자보호",
      content: `1인당 최고 ${insurance.depositorProtection}만원`,
      explain: `이 상품은 예금자보호법에 따라 예금보험공사가 1인당 “최고 ${insurance.depositorProtection}만원” 한도로 보호합니다. (단, 법인 계약 제외)`,
    },

    {
      img: Guarantee,
      title: "보장성보험",
      content: "상해, 질병 등",
      explain:
        "이 상품은 만기시 환급금이 총 납입한 보험료를 초과하지 않습니다.",
    },

    {
      img: Calender,
      title: "청약철회기간",
      content: `청약 후 ${insurance.cancellationPeriod}일 이내`,
      explain: `이 상품은 청약을 한 날부터 ${
        insurance.cancellationPeriod
      }일 이내(보험증권을 받은 날부터 ${
        insurance.cancellationPeriod / 2
      }일 이내)에 청약철회가 가능합니다.`,
    },

    {
      img: Price,
      title: "보험가격지수",
      content: `${insurance.priceIndex}% (낮을수록 저렴)`,
      explain:
        "[보험가격지수] 보험가격지수 / 성별 / 표준형 계약 기준 산출식 = 영업보험료 ÷ (참조순보험료 + 상품군별 평균사업비) X 100 보험업계 평균가격대비 상품의 보험가격 수준(대표계약 기준)을 비교하는 지수로 보장내역이 동일한 경우 100% 초과이면 업계 평균보다 가격 수준이 높고, 100% 미만이면 업계 평균보다 가격수준이 낮습니다. * 다만, 보험가격지수는 업계평균 영업보험료 대비 동상품의 영업보험료 수준을 나타내는 지표로써, 회사별로 사업비가 상이하므로 보험가격지수가 낮다고 하여 반드시 보험료가 저렴한 것은 아닙니다.",
    },
  ];

  const imgUrl = insurance?.insuranceLogo?.imageUrl;

  return !isLoading ? (
    <Background>
      <AboveContainer>
        <LeftArea>
          {imgUrl ? (
            <Image src={imgUrl} alt="보험사 이미지" />
          ) : (
            <div>loading</div>
          )}
          <ImageText onClick={addCompare}>
            <CompareImage src={Box} alt="비교함 담기 이미지" />
            비교함 담기
          </ImageText>
        </LeftArea>
        <RightArea>
          <InsuranceNameContainer>
            <InsuranceName>{insurance.productName}</InsuranceName>
            <CompanyName>{insurance.companyName}</CompanyName>
          </InsuranceNameContainer>
          <InsuranceDetailContainer>
            {insuranceArr.map((item, index) => (
              <DetailBox insuranceData={item} key={index} />
            ))}
          </InsuranceDetailContainer>
          {insurance.registrationType === null ? (
            <LargeButton text="바로가기 정보가 없습니다." />
          ) : (
            <LargeButton
              handleClick={goSite}
              text={insurance.registrationType}
            />
          )}
        </RightArea>
      </AboveContainer>
      <BelowContainer>
        <MainText>주요정보</MainText>
        <InformationContainer>
          {mainArr.map((item, index) => (
            <InformationBox MainData={item} key={index} />
          ))}
        </InformationContainer>
      </BelowContainer>
    </Background>
  ) : (
    <Loading />
  );
};

export default Detail;

const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.STONE};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AboveContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1160px;
  height: 659px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 25px;
  margin-top: 30px;
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 352px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100px;
  margin-bottom: 22px;
`;

const ImageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const CompareImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const RightArea = styled.div`
  width: 354px;
  height: 508px;
`;

const InsuranceNameContainer = styled.div`
  width: 100%;
  height: 126px;
  margin-bottom: 53px;
`;

const InsuranceName = styled.div`
  width: 500px;
  font-size: 35px;
  font-weight: bold;
  margin: 12px 0;
`;

const CompanyName = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

const InsuranceDetailContainer = styled.div`
  width: 100%;
  height: 226px;
  margin-bottom: 53px;
`;

const BelowContainer = styled(AboveContainer)`
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 40px 25px;
  height: 100%;
`;

const MainText = styled.p`
  align-self: start;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 61px;
`;

const InformationContainer = styled.div`
  width: 1110px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
