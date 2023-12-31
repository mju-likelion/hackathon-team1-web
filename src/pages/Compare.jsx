import { styled } from "styled-components";
import UpsideCompareBox from "../components/UpsideCompareBox";
import UpsideEmptyBox from "../components/UpsideEmptyBox";
import CompareDetailBox from "../components/CompareDetailBox";
import { useRecoilState } from "recoil";
import { CompareAtom } from "../assets/atom/CompareAtom";

const MAX_COMPARE_AMOUNT = 3;

const Compare = () => {
  const [compareBox, setCompareBox] = useRecoilState(CompareAtom);

  const onDelete = (infoId) => {
    const filteredItem = compareBox.filter((item) => infoId !== item.infoId);
    setCompareBox(filteredItem);
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
        <UpsideCompareBox loanData={item} onDelete={onDelete} />
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
      <CompareContainer>
        <UpsideArea>{rendering(compareBox)}</UpsideArea>
        <DownSideArea>
          <CompareDetailBox compareInsurance={compareBox} />
        </DownSideArea>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1160px;
  height: 659px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 29px auto 10px auto;
  justify-items: center;

  span:not(:last-child) {
    border-right: 1px ${({ theme }) => theme.colors.STONE} solid;
  }
`;

const DownSideArea = styled.div`
  display: grid;
  width: 1160px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin: 29px auto 54px auto;
  justify-items: center;
  border-radius: 25px;
  padding: 40px 0 30px 0;
`;

const GridItem = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default Compare;
