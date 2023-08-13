import { useNavigate } from "react-router";
import { styled } from "styled-components";

/*보험이 없을 경우(빈 경우) 컴포넌트*/
const UpsideEmptyBox = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate("/");
  };

  const goSearch = () => {
    navigate("/search");
  };

  return (
    <EmptyContainer>
      <OuterCircle>
        <InnerBox>+</InnerBox>
      </OuterCircle>
      <SelectButton onClick={goSearch}>검색 결과 페이지로</SelectButton>
      <SelectButton onClick={goMain}>다시 검색하기</SelectButton>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.div`
  width: 250px;
  height: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

const OuterCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.STONE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBox = styled.div`
  width: 80px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.LIGHTGRAY};
  border-style: dotted;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;

const SelectButton = styled.button`
  width: 250px;
  height: 50px;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export default UpsideEmptyBox;
