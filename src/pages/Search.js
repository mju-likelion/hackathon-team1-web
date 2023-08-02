import { styled } from "styled-components";
import meritz from "../assets/meritz.svg";
import kb from "../assets/kb.svg";
import hyundai from "../assets/hyundai.svg";
import db from "../assets/db.svg";
import SmallButton from "../components/SmallButton";
import InsuranceBox from "../components/InsuranceBox";

const loandata = [
  {
    img: meritz,
    main: "메리츠손해보험",
    company: "메리츠화재",
    age: "15~99",
    cost: "3,770",
    type: "온라인 가입",
  },
  {
    img: kb,
    main: "KB보장보험",
    company: "KB손해보험",
    age: "15~88 ",
    cost: "6,770",
    type: "온라인 가입",
  },
  {
    img: hyundai,
    main: "현대손해보험",
    company: "현대해상",
    age: "15~99",
    cost: "5,770",
    type: "설계사 상담",
  },
  {
    img: db,
    main: "DB보장보험",
    company: "DB손해보험",
    age: "0~99",
    cost: "1,770",
    type: "설계사 상담",
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
          {loandata.map((item, idx) => (
            <InsuranceBox key={item.main} id={idx} loandata={item} />
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

const LeftCount = styled.div`
  width: 125px;
  height: 65px;
  font-size: 30px;
  font-weight: 600;
`;

const RightCount = styled.div`
  width: 110px;
  height: 65px;
  font-size: 25px;
  line-height: 33px;
`;

export default Search;
