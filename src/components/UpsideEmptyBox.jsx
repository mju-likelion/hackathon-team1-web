import { styled } from "styled-components";

/*보험이 없을 경우 컴포넌트*/
const UpsideEmptyBox = () => {
  return (
    <EmptyContainer>
      <EmptyBox>
        <OuterCircle>
          <InnerBox>+</InnerBox>
        </OuterCircle>
        <SelectButton>이전 검색 결과 페이지로</SelectButton>
        <SelectButton>다시 검색하기</SelectButton>
      </EmptyBox>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.div`
  width: 308px;
  height: 492px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.STONE};
    width: 3px;
    height: 659px;
  }
`;

const EmptyBox = styled.div`
  width: 308px;
  height: 404px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OuterCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.STONE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const InnerBox = styled.div`
  width: 80px;
  height: 50px;
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.colors.LIGHTGRAY};
  border-style: dotted;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
`;

const SelectButton = styled.button`
  width: 250px;
  height: 50px;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 20px;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
`;

export default UpsideEmptyBox;
