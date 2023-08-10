import { styled } from "styled-components";
import Meritz from "../assets/images/Meritz.svg";
import Kookmin from "../assets/images/KookMin.svg";
import Hyundai from "../assets/images/Hyundai.svg";
import Dongboo from "../assets/images/DongBoo.svg";
import SmallButton from "../components/SmallButton";
import InsuranceBox from "../components/InsuranceBox";

const LOAN_DATA = [
  // 샘플 데이터
  {
    img: Meritz,
    loanName: "메리츠손해보험",
    company: "메리츠화재",
    startAge: 15,
    endAge: 99,
    cost: 3770,
    loanType: "온라인 가입",
  },
  {
    img: Kookmin,
    loanName: "KB보장보험",
    company: "KB손해보험",
    startAge: 15,
    endAge: 88,
    cost: 6770,
    loanType: "온라인 가입",
  },
  {
    img: Hyundai,
    loanName: "현대손해보험",
    company: "현대해상",
    startAge: 15,
    endAge: 99,
    cost: 5770,
    loanType: "설계사 상담",
  },
  {
    img: Dongboo,
    loanName: "DB보장보험",
    company: "DB손해보험",
    startAge: 0,
    endAge: 99,
    cost: 1770,
    loanType: "설계사 상담",
  },
];

const Search = () => {
  return (
    <>
      <TopContainer>
        <LeftContainer>
          <QuestionArea>
            '40세 남성 보험료가 6000원 이하 보험 추천 부탁' 질문에 대한
          </QuestionArea>
          <CountArea>
            <LeftCount>{LOAN_DATA.length}개 보험</LeftCount>
            <RightCount>검색 결과</RightCount>
          </CountArea>
        </LeftContainer>
        <SmallButton text="다시 질문하기" />
      </TopContainer>
      <BottomArea>
        {LOAN_DATA.length === 0 ? (
          <ResultNothingContainer>
            <ResultNothingBox>
              <NothingLargeText>검색 결과를 찾을 수 없습니다.</NothingLargeText>
              <NothingSmallText>다시 질문 해주세요!</NothingSmallText>
            </ResultNothingBox>
          </ResultNothingContainer>
        ) : (
          <BottomContainer>
            {LOAN_DATA.map((item) => (
              <InsuranceBox key={item.loanName} loanData={item} />
            ))}
          </BottomContainer>
        )}
      </BottomArea>
    </>
  );
};

const TopContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-top: 31px;
`;

const BottomArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 37px;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  width: 700px;
  height: 90px;
`;

const QuestionArea = styled.div`
  width: 700px;
  height: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const CountArea = styled.div`
  width: 300px;
  height: 65px;
  display: flex;
  align-items: center;
`;

const LeftCount = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const RightCount = styled.p`
  font-size: 25px;
`;

const ResultNothingContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const ResultNothingBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NothingLargeText = styled.p`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 35px;
  font-weight: 700;
  margin: 0;
`;

const NothingSmallText = styled.p`
  color: ${(props) => props.theme.colors.LIGHTGRAY};
  font-size: 25px;
  font-weight: 700;
  margin: 0;
`;

export default Search;
