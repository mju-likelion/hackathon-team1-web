import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import Header from "../components/Header";
import { useState } from "react";
import CompareDetailBox from "../components/CompareDetailBox";

const Insurances = [
  {
    id: 0,
    loanName: "손해보험",
    company: "롯데해상",
    startAge: 19,
    endAge: 99,
    cost: 5990,
    type: "온라인 가입",
  },
  {
    id: 1,
    loanName: "삼성보험",
    company: "삼성해상",
    startAge: 19,
    endAge: 59,
    cost: 2990,
    type: "온라인 가입",
  },
  {
    id: 2,
    loanName: "동부보험",
    company: "동부해상",
    startAge: 19,
    endAge: 79,
    cost: 3990,
    type: "설계사 상담",
  },
];

localStorage.setItem("insurances", JSON.stringify(Insurances));

const Compare = () => {
  const [compareInsurance, setCompareInsurance] = useState(
    localStorage.getItem("insurances")
  );
  const loanArr = JSON.parse(compareInsurance);

  const onDelete = (id) => {
    const newArr = loanArr.filter((item) => id !== item.id);
    localStorage.setItem("insurances", JSON.stringify(newArr));
    setCompareInsurance(localStorage.getItem("insurances"));
  };

  const rendering = (loanArr) => {
    const result = [];
    if (loanArr.length === 0) {
      result.push(<UpsideEmptyBox />);
    }
    loanArr.map((item, idx) => {
      result[idx] = <UpsideCompareBox testData={item} onDelete={onDelete} />;
      if (idx !== 2) {
        result[idx + 1] = <UpsideEmptyBox />;
      }
    });
    return result;
  };

  return (
    <>
      <Header />
      <CompareContainer>
        <UpsideArea>{rendering(loanArr)}</UpsideArea>
        <CompareDetailBox />
      </CompareContainer>
    </>
  );
};

const CompareContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.STONE};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpsideArea = styled.div`
  width: 1160px;
  height: 659px;
  border-radius: 25px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin-top: 29px;
`;

export default Compare;
