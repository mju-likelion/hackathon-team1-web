import { styled } from "styled-components";
import Meritz from "../assets/images/Meritz.svg";
import Kookmin from "../assets/images/KookMin.svg";
import Hyundai from "../assets/images/Hyundai.svg";
import Dongboo from "../assets/images/DongBoo.svg";
import SmallButton from "../components/SmallButton";
import InsuranceBox from "../components/InsuranceBox";
import ResultNothing from "../components/ResultNothing";
import Paging from "./Paging";
import { useState, useEffect } from "react";

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
  const [insurance, setInsurance] = useState([]); // 리스트에 나타낼 보험들
  const [count, setCount] = useState(0); // 보험 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 값 1
  const [insuracePerPage] = useState(3); // 한 페이지에 보여질 보험 개수
  const [indexOfFirstInsurance, setIndexOfFirstInsurance] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [indexOfLastInsurance, setIndexOfLastInsurance] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [currentInsurance, setCurrentInsurance] = useState([]); // 현재 페이지에서 보여지는 보험들

  const { term } = JSON.parse(localStorage.getItem("formData"));

  const setPage = (error) => {
    setCurrentPage(error);
  };

  useEffect(() => {
    setInsurance(LOAN_DATA);
    setCount(insurance.length);
    setIndexOfLastInsurance(currentPage * insuracePerPage);
    setIndexOfFirstInsurance(indexOfLastInsurance - insuracePerPage);
    setCurrentInsurance(
      insurance.slice(indexOfFirstInsurance, indexOfLastInsurance)
    );
  }, [
    currentPage,
    indexOfLastInsurance,
    indexOfFirstInsurance,
    insurance,
    insuracePerPage,
  ]);

  return (
    <>
      <TopContainer>
        <LeftContainer>
          <QuestionArea>"{term}" 질문에 대한</QuestionArea>
          <CountArea>
            <LeftCount>{LOAN_DATA.length}개 보험</LeftCount>
            <RightCount>검색 결과</RightCount>
          </CountArea>
        </LeftContainer>
        <SmallButton text="다시 질문하기" />
      </TopContainer>
      <BottomArea>
        {LOAN_DATA.length === 0 ? (
          <ResultNothing />
        ) : (
          <BottomContainer>
            {currentInsurance.map((item) => (
              <InsuranceBox key={item.loanName} loanData={item} />
            ))}
          </BottomContainer>
        )}
      </BottomArea>
      <Paging page={currentPage} count={count} setPage={setPage} />
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

export default Search;
