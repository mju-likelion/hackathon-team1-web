import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import Header from "../components/Header";
import { useState } from "react";

const Insurances = [
  {
    id: 0,
    loanName: "손해보험",
    company: "롯데해상",
  },
  {
    id: 1,
    loanName: "실비보험",
    company: "삼성해상",
  },
  {
    id: 2,
    loanName: "이것보험",
    company: "동부해상",
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

  const rendering = () => {
    const result = [];
    if (loanArr.length >= 3) {
      for (let i = 0; i < loanArr.length; i++) {
        result.push(
          <UpsideCompareBox testData={loanArr[i]} onDelete={onDelete} />
        );
      }
    } else {
      for (let i = 0; i < loanArr.length + 1; i++) {
        loanArr[i]
          ? result.push(
              <UpsideCompareBox testData={loanArr[i]} onDelete={onDelete} />
            )
          : result.push(<UpsideEmptyBox />);
      }
    }
    return result;
  };

  return (
    <>
      <Header />
      <CompareContainer>
        <UpsideArea>{rendering()}</UpsideArea>
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
