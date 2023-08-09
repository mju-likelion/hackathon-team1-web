import { styled } from "styled-components";
import Meritz from "../assets/Meritz.svg";
import Kookmin from "../assets/images/KookMin.svg";
import Hyundai from "../assets/images/Hyundai.svg";
import Dongboo from "../assets/DongBoo.svg";
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
      {/* 헤더 */}

      <TopContainer>
        <LeftContainer>
          <QuestionArea>
            '40세 남성 보험료가 6000원 이하 보험 추천 부탁'질문에 대한
          </QuestionArea>
          <CountArea>
            <LeftCount>N개 보험</LeftCount>
            <RightCount>검색 결과</RightCount>
          </CountArea>
        </LeftContainer>
        <SmallButton text="다시 질문하기" />
      </TopContainer>
      <BottomArea>
        <BottomContainer>
          {LOAN_DATA.map((item) => (
            <InsuranceBox key={item.main} loanData={item} />
          ))}
        </BottomContainer>
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
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 1170px;
  margin: 37px;
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

export default Search;
