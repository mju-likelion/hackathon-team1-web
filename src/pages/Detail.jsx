import { styled } from "styled-components";
import lotte from "../assets/lotte.svg";
import statistics from "../assets/statistics.svg";
import graph from "../assets/graph.svg";
import disease from "../assets/disease.svg";
import day from "../assets/day.svg";
import DetailBox from "../components/DetailBox";

const data = [
  {
    img: graph,
    title: "보험료 갱신형",
    content: "보험료 변동가능",
  },
  {
    img: disease,
    title: "보장성 보험",
    content: "상해, 질병 등",
  },
  {
    img: day,
    title: "청약 철회 기간",
    content: "청약 후 30일 이내",
  },
];

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
              {data.map((item, idx) => (
                <DetailBox key={item.title} id={idx} data={item} />
              ))}
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
  background-color: ${({ theme }) => theme.colors.STONE};
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
