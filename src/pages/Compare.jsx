import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import Header from "../components/Header";

const Compare = () => {
  /*테스트용 목업 데이터 로컬스토리지 저장*/
  const FirstData = {
    id: 0,
    loanName: "뭐뭐뭐보장보험",
    companyName: "롯데손해보험",
  };

  const SecondData = {
    id: 1,
    loanName: "이것은보장보험",
    companyName: "삼성손해보험",
  };

  const ThirdData = {};

  localStorage.setItem(FirstData.id, JSON.stringify(FirstData));
  localStorage.setItem(SecondData.id, JSON.stringify(SecondData));
  localStorage.setItem(ThirdData.id, JSON.stringify(ThirdData));
  /*테스트용 목업 데이터 로컬스토리지 저장*/

  const loanArr = [];
  const loadedFirstData = localStorage.getItem(FirstData.id);
  const loadedSecondData = localStorage.getItem(SecondData.id);
  const loadedThirdData = localStorage.getItem(ThirdData.id);
  loanArr.push(JSON.parse(loadedFirstData));
  loanArr.push(JSON.parse(loadedSecondData));
  loanArr.push(JSON.parse(loadedThirdData));

  return (
    <>
      <Header />
      <CompareContainer>
        <UpsideArea>
          {loanArr.map((item) => {
            return Object.keys(item).length === 0 ? (
              <UpsideEmptyBox />
            ) : (
              <UpsideCompareBox testData={item} />
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

const BreakLine = styled.div`
  width: 1px;
  height: 659px;
  background-color: ${({ theme }) => theme.colors.STONE};
`;

export default Compare;
