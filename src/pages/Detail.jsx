import { styled } from "styled-components";
import lotte from "../assets/images/Lotte.svg";
import DetailBox from "../components/DetailBox";
import Box from "../assets/images/Box.svg";
import Protect from "../assets/images/Protect.svg";
import Price from "../assets/images/Price.svg";
import Calender from "../assets/images/Calender.svg";
import Guarantee from "../assets/images/Guarantee.svg";
import InformationBox from "../components/InformationBox";
import { useState } from "react";
import Modal from "../components/Modal";

const INSURANCE_DATA = [
  {
    title: "가입연령",
    content: "19~49세",
  },
  {
    title: "보험료",
    content: "남 5,467 원 여 5,380 원",
  },
];

const MAIN_INFORMATION = [
  {
    img: Protect,
    title: "예금자보호",
    content: "1인당 최고 5천만원",
    explain:
      "이 상품은 예금자보호법에 따라 예금보험공사가 1인당 “최고 5천만원” 한도로 보호합니다. (단, 법인 계약 제외)",
  },

  {
    img: Guarantee,
    title: "보장성보험",
    content: "상해, 질병 등",
    explain: "이 상품은 만기시 환급금이 총 납입한 보혐료를 초과하지 않습니다.",
  },

  {
    img: Calender,
    title: "청약철회기간",
    content: "청약 후 30일 이내",
    explain:
      "이 상품은 청약을 한 날부터 30일 이내(보험증권을 받은 날부터 15일 이내)에 청약철회가 가능합니다.",
  },

  {
    img: Price,
    title: "보험가격지수",
    content: "N% (낮을수록 저렴)",
    explain:
      "이 상품은 예금자보호법에 따라 예금보험공사가 1인당 “최고 5천만원” 한도로 보호합니다. (단, 법인 계약 제외)",
  },
];

const Detail = () => {
  const [isBtnModalOpen, setIsBtnModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const onBtnModalClose = () => {
    setIsBtnModalOpen(false);
  };

  const onCompareModalClose = () => {
    setIsCompareModalOpen(false);
  };
  return (
    <>
      {isBtnModalOpen && (
        <Modal
          iconName="Call"
          callNum="010-1234-5678"
          handleModalClose={onBtnModalClose}
        />
      )}
      {isCompareModalOpen && <Modal handleModalClose={onCompareModalClose} />}

      <Background>
        <AboveContainer>
          <LeftArea>
            <Image src={lotte} alt="보험사 이미지" />
            <ImageText onClick={() => setIsCompareModalOpen(true)}>
              <CompareImage src={Box} alt="비교함 담기 이미지" />
              비교함 담기
            </ImageText>
          </LeftArea>
          <RightArea>
            <InsuranceNameContainer>
              <InsuranceExplain>
                짱구 같은 김효리 최대 5대 때리기
              </InsuranceExplain>
              <InsuranceName>김효리보장보험</InsuranceName>
              <CompanyName>롯데손해보험</CompanyName>
            </InsuranceNameContainer>
            <InsuranceDetailContainer>
              {INSURANCE_DATA.map((item, index) => (
                <DetailBox id={index} InsuranceData={item} key={item.title} />
              ))}
            </InsuranceDetailContainer>
            <LargeButton onClick={() => setIsBtnModalOpen(true)}>
              상담사 연결
            </LargeButton>
          </RightArea>
        </AboveContainer>
        <BelowContainer>
          <MainText>주요정보</MainText>
          <InformationContainer>
            {MAIN_INFORMATION.map((item, index) => (
              <InformationBox id={index} MainData={item} key={item.title} />
            ))}
          </InformationContainer>
        </BelowContainer>
      </Background>
    </>
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
  background-color: white;
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

const InsuranceExplain = styled.div`
  font-size: 25px;
  width: 100%;
  height: 30px;
`;

const InsuranceName = styled.div`
  width: 100%;
  height: 42px;
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

const LargeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.BLUE};
  color: ${({ theme }) => theme.colors.WHITE};
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 23px;
  font-weight: bold;
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
