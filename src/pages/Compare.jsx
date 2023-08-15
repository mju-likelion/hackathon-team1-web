import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import Header from "../components/Header";
import { useState } from "react";
import CompareDetailBox from "../components/CompareDetailBox";

const Compare = () => {
  const [compareInsurance, setCompareInsurance] = useState(
    JSON.parse(localStorage.getItem("insurances")) || []
  );

  const onDelete = (infoId) => {
    const filteredItem = compareInsurance.filter(
      (item) => infoId !== item.infoId
    );
    localStorage.setItem("insurances", JSON.stringify(filteredItem));
    setCompareInsurance(filteredItem);
  };

  const rendering = (insurances) => {
    if (insurances.length === 0) {
      return (
        <GridItem key={Math.random()}>
          <UpsideEmptyBox />
        </GridItem>
      );
    }

    const result = insurances.map((item) => (
      <GridItem key={item.infoId}>
        <UpsideCompareBox testData={item} onDelete={onDelete} />
      </GridItem>
    ));

    if (result.length < MAX_COMPARE_AMOUNT) {
      result.push(
        <GridItem key={Math.random()}>
          <UpsideEmptyBox />
        </GridItem>
      );
    }

    return result;
  };

  return (
    <>
      <Header />
      <CompareContainer>
        <UpsideArea>{rendering(compareInsurance)}</UpsideArea>
        <CompareDetailBox compareInsurance={compareInsurance} />
      </CompareContainer>
    </>
  );
};

// const INSURANCES = [
//   {
//     infoId: "0",
//     loanName: "손해보험",
//     company: "롯데해상",
//     startAge: 19,
//     endAge: 99,
//     cost: 5990,
//     type: "온라인 가입",
//   },
//   {
//     infoId: "1",
//     loanName: "손해보험",
//     company: "삼성해상",
//     startAge: 19,
//     endAge: 59,
//     cost: 2990,
//     type: "온라인 가입",
//   },
//   {
//     infoId: "2",
//     loanName: "동부보험",
//     company: "동부해상",
//     startAge: 19,
//     endAge: 79,
//     cost: 3990,
//     type: "설계사 상담",
//   },
// ];

// localStorage.setItem("insurances", JSON.stringify(INSURANCES));
const MAX_COMPARE_AMOUNT = 3;

const CompareContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.STONE};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpsideArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1160px;
  height: 659px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 29px auto 54px auto;
  justify-items: center;

  span:not(:last-child) {
    border-right: 1px ${({ theme }) => theme.colors.STONE} solid;
  }
`;

const GridItem = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default Compare;
