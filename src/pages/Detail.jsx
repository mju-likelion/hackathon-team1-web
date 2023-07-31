import { styled } from "styled-components";
import lotte from "../assets/lotte.svg";
import statistics from "../assets/statistics.svg";
import graph from "../assets/graph.svg";
import disease from "../assets/disease.svg";
import day from "../assets/day.svg";

const Detail = () => {
  return (
    <>
      <Background>
        {/* 헤더 */}
        <Container>
          <LeftContainer>
            <Image src={lotte} alt="보험사 이미지" />
            <ImageText>
              <StatisticsImage
                src={statistics}
                alt="통계자료 바로가기 이미지"
              />
              통계자료 바로가기
            </ImageText>
          </LeftContainer>
          <RightContainer>
            <InsuranceNameContainer>
              <InsuranceExplain>
                짱구 같은 김효리 최대 5대 때리기
              </InsuranceExplain>
              <InsuranceName>김효리보장보험</InsuranceName>
              <CompanyName>롯데손해보험</CompanyName>
            </InsuranceNameContainer>
            <InsuranceDetailContainer>
              <InsuranceDetailBox>
                <DetailImage src={graph} alt="그래프 이미지" />
                <DetailTextBox>
                  <DetailTitle>보험료 갱신형</DetailTitle>
                  <DetailContent>보험료 변동가능</DetailContent>
                </DetailTextBox>
              </InsuranceDetailBox>
              <InsuranceDetailBox>
                <DetailImage src={disease} alt="질병 이미지" />
                <DetailTextBox>
                  <DetailTitle>보장성 보험</DetailTitle>
                  <DetailContent>상해, 질병 등</DetailContent>
                </DetailTextBox>
              </InsuranceDetailBox>
              <InsuranceDetailBox>
                <DetailImage src={day} alt="청약철회 이미지" />
                <DetailTextBox>
                  <DetailTitle>청약 철회 기간</DetailTitle>
                  <DetailContent>청약 후 30일 이내</DetailContent>
                </DetailTextBox>
              </InsuranceDetailBox>
            </InsuranceDetailContainer>
            <LargeButton>사이트 이동</LargeButton>
          </RightContainer>
        </Container>
      </Background>
    </>
  );
};

export default Detail;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1160px;
  height: 659px;
  background-color: white;
  border-radius: 25px;
`;

const LeftContainer = styled.div`
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
`;

const StatisticsImage = styled.img`
  width: 30px;
  height: 30px;
`;

const RightContainer = styled.div`
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
  margin: 12px 0px;
`;

const CompanyName = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  color: #808080;
`;

const InsuranceDetailContainer = styled.div`
  width: 100%;
  height: 226px;
  margin-bottom: 53px;
`;

const InsuranceDetailBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 23px;
`;

const DetailImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 21px;
`;

const DetailTextBox = styled.div`
  width: 100%;
  height: 60px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #545454;
  margin-bottom: 6px;
`;

const DetailContent = styled.div`
  width: 100%;
  height: 24px;
  font-size: 20px;
  color: #545454;
`;

const LargeButton = styled.button`
  background-color: #168ce3;
  color: white;
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 23px;
  font-weight: bold;
`;
