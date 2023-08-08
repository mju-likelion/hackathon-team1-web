import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import Header from "../components/Header";
import { useState } from "react";

/*테스트용 목업 데이터 로컬스토리지 저장*/
/*데이터 내 key 값을 통해 로컬스토리지의 키를 정합니다.*/
const FirstData = {
  key: "first",
  id: 0,
  loanName: "뭐뭐뭐보장보험",
  companyName: "롯데손해보험",
};

const SecondData = {
  // 보험을 선택하지 않았을 경우 예시
  key: "second",
};

const ThirdData = {
  key: "third",
  id: 1,
  loanName: "이것은보장보험",
  companyName: "삼성손해보험",
};

localStorage.setItem(FirstData.key, JSON.stringify(FirstData));
localStorage.setItem(SecondData.key, JSON.stringify(SecondData));
localStorage.setItem(ThirdData.key, JSON.stringify(ThirdData));
/*테스트용 목업 데이터 로컬스토리지 저장*/

const Compare = () => {
  const loanArr = [];
  const [loadedFirstData, setLoadedFirstData] = useState(
    localStorage.getItem("first")
  );
  const [loadedSecondData, setLoadedSecondData] = useState(
    localStorage.getItem("second")
  );
  const [loadedThirdData, setLoadedThirdData] = useState(
    localStorage.getItem("third")
  );
  loanArr.push(JSON.parse(loadedFirstData));
  loanArr.push(JSON.parse(loadedSecondData));
  loanArr.push(JSON.parse(loadedThirdData));

  const onDelete = (key) => {
    const newArr = {};
    localStorage.setItem(key, JSON.stringify(newArr));
    setLoadedFirstData(localStorage.getItem("first"));
    setLoadedSecondData(localStorage.getItem("second"));
    setLoadedThirdData(localStorage.getItem("third"));
  };

  return (
    <>
      <Header />
      <CompareContainer>
        <UpsideArea>
          {loanArr.map((item) => {
            return localStorage.getItem(item.id) ? (
              <UpsideEmptyBox />
            ) : (
              <UpsideCompareBox testData={item} onDelete={onDelete} />
            );
          })}
        </UpsideArea>
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
