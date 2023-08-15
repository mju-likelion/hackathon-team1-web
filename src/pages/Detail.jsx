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
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const Detail = () => {
  const { infoId } = useParams();

  const pageLanguage = useRecoilState(LanguageAtom);

  const [count, setCount] = useState(0);

  const [compareBox, setCompareBox] = useState(
    JSON.parse(localStorage.getItem("insurances")) || []
  );

  const [isBtnModalOpen, setIsBtnModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleBtnModal = () => {
    setIsBtnModalOpen((prev) => !prev);
  };

  const handleCompareModal = () => {
    setIsCompareModalOpen((prev) => !prev);
  };

  const [insurance, setInsurance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      await AxiosDetail(infoId, (res) => setInsurance(res));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addCompare = () => {
    if (compareBox.length < 3) {
      setCompareBox((prevCompareBox) => [...prevCompareBox, insurance]);
      handleCompareModal();
    } else {
      setIsCompareModalOpen(true);
    }
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("insurances", JSON.stringify(compareBox));
  }, [compareBox]);

  const goSite = () => {
    window.location.href = insurance.registrationLink;
  };

  const modalText = () => {
    if (insurance.registrationType === "온라인가입") {
      goSite();
    } else if (insurance.registrationType.startsWith("설계")) {
      if (insurance.registrationLink === null) {
        alert("정보가 없습니다");
      } else if (insurance.registrationLink.startsWith("http")) {
        goSite();
      }
    }
  };

  const insuranceArr = [
    {
      title: "가입연령",
      englishTitle: "Entry Age",
      chineseTitle: "投保年龄",
      firstContent: insurance.insuranceAgeGroupStart,
      secondContent: insurance.insuranceAgeGroupEnd,
    },
    {
      title: "보험료",
      englishTitle: "Insurance Premium",
      chineseTitle: "保险费",
      firstContent: insurance.premiumMale,
      secondContent: insurance.premiumFemale,
    },
  ];

  const mainArr = [
    {
      img: Protect,
      title: "예금자보호",
      englishTitle: "Deposit Protection",
      chineseTitle: "存款保护",
      content: `1인당 최고 ${insurance.depositorProtection}만원`,
      englishContent: `One person up to ${insurance.depositorProtection}million won`,
      chineseContent: `每人最高${insurance.depositorProtection}百万韩元`,
      explain: `이 상품은 예금자보호법에 따라 예금보험공사가 1인당 “최고 ${insurance.depositorProtection}만원” 한도로 보호합니다. (단, 법인 계약 제외)`,
      englishExplain: `This product is protected by the Deposit Insurance Corporation with a maximum limit of ${insurance.depositorProtection} million won per person under the Deposit Protection Law. (Excluding corporate contracts)`,
      chineseExplain: `这款产品受存款保险法保护, 每人最高限额为${insurance.depositorProtection}万韩元, 不包括法人合同.`,
    },

    {
      img: Guarantee,
      title: "보장성보험",
      englishTitle: "Guaranteed Insurance",
      chineseTitle: "保障保险",
      content: "상해, 질병 등",
      englishContent: "Injuries, diseases, etc.",
      chineseContent: "伤害、疾病等 (Shānghài, jíbìng děng)",
      explain:
        "이 상품은 만기시 환급금이 총 납입한 보험료를 초과하지 않습니다.",
      englishExplain:
        "This product does not exceed the total premiums paid in maturity refund.",
      chineseExplain: "本产品不超过到期退还的总保费.",
    },

    {
      img: Calender,
      title: "청약철회기간",
      englishTitle: "Withdrawal Period",
      chineseTitle: "退保期限",
      content: `청약 후 ${insurance.cancellationPeriod}일 이내`,
      englishContent: `Within ${insurance.cancellationPeriod} days after subscription`,
      chineseContent: `在订阅后${insurance.cancellationPeriod}天内 (zài dìngyuè hòu ${insurance.cancellationPeriod} tiān nèi)`,
      explain: `이 상품은 청약을 한 날부터 ${
        insurance.cancellationPeriod
      }일 이내(보험증권을 받은 날부터 ${
        insurance.cancellationPeriod / 2
      }일 이내)에 청약철회가 가능합니다.`,
      englishExplain: `
        This product allows withdrawal of subscription within ${
          insurance.cancellationPeriod
        }days from the date of subscription (within ${
        insurance.cancellationPeriod / 2
      }days from the date of receiving the insurance policy).`,
      chineseExplain: `该产品自申请购买之日起, 可以在${
        insurance.cancellationPeriod
      }天内（自收到保单之日起,${
        insurance.cancellationPeriod / 2
      }天内）申请撤销订购。`,
    },

    {
      img: Price,
      title: "보험가격지수",
      englishTitle: "Insurance Price Index",
      chineseTitle: "保险价格指数",
      content: `${insurance.priceIndex}% (낮을수록 저렴)`,
      englishContent: `${insurance.priceIndex}% (Lower is cheaper)`,
      chineseContent: `${insurance.priceIndex}% （越低越便宜)`,
      explain:
        "[보험가격지수] 보험가격지수 / 성별 / 표준형 계약 기준 산출식 = 영업보험료 ÷ (참조순보험료 + 상품군별 평균사업비) X 100 보험업계 평균가격대비 상품의 보험가격 수준(대표계약 기준)을 비교하는 지수로 보장내역이 동일한 경우 100% 초과이면 업계 평균보다 가격 수준이 높고, 100% 미만이면 업계 평균보다 가격수준이 낮습니다. * 다만, 보험가격지수는 업계평균 영업보험료 대비 동상품의 영업보험료 수준을 나타내는 지표로써, 회사별로 사업비가 상이하므로 보험가격지수가 낮다고 하여 반드시 보험료가 저렴한 것은 아닙니다.",
      englishExplain:
        "[Insurance Price Index] The insurance price index is calculated based on the formula: Insurance Price Index / Gender / Standard Contract Basis = Sales Insurance Premium / (Reference Net Insurance Premium + Average Business Expenses by Product Category) X 100. This index compares the price level of insurance products to the industry average price. If the index is above 100%, the price level is higher than the industry average, and if it's below 100%, the price level is lower than the industry average. However, please note that the insurance price index is an indicator of the level of insurance premium compared to the industry average sales insurance premium, and it doesn't necessarily mean that lower index values always indicate lower premiums, as business expenses can vary between companies.",
      chineseExplain:
        "【保险价格指数】保险价格指数根据以下公式计算：保险价格指数 / 性别 / 标准合同基础 = 销售保险费 /（参考净保费 + 按产品类别平均业务费用）X 100。该指数将保险产品的价格水平与行业平均价格进行比较。如果指数超过100％,则价格水平高于行业平均水平；如果低于100％,则价格水平低于行业平均水平。但是,请注意,保险价格指数是将保险费用与行业平均销售保险费用进行比较的指标,并不意味着较低的指数值总是表示较低的保费,因为公司的业务费用可能会有所不同.",
    },
  ];

  const imgUrl = insurance?.insuranceLogo?.imageUrl;

  return !isLoading ? (
    <>
      {isBtnModalOpen && (
        <Modal
          iconName="Call"
          callNum={insurance.registrationLink}
          handleModalClose={handleBtnModal}
        />
      )}
      {isCompareModalOpen && (
        <Modal
          iconName={count > 3 ? "LockerFull" : "LockerIn"}
          handleModalClose={handleCompareModal}
        />
      )}
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
              {pageLanguage[0] === "KOR"
                ? "비교함 담기"
                : pageLanguage[0] === "ENG"
                ? "add to compare"
                : "加入比较箱"}
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
              <LargeButton text="바로가기 정보가 없습니다" />
            ) : (
              <LargeButton
                handleClick={modalText}
                text={insurance.registrationType}
              />
            )}
          </RightArea>
        </AboveContainer>
        <BelowContainer>
          <MainText>
            {pageLanguage[0] === "KOR"
              ? "주요정보"
              : pageLanguage[0] === "ENG"
              ? "Key Information"
              : "重要信息"}
          </MainText>
          <InformationContainer>
            {mainArr.map((item, index) => (
              <InformationBox MainData={item} key={index} />
            ))}
          </InformationContainer>
        </BelowContainer>
      </Background>
    </>
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
