import { styled } from "styled-components";

const ResultNothing = () => {
  return (
    <ResultNothingContainer>
      <ResultNothingBox>
        <NothingLargeText>검색 결과를 찾을 수 없습니다.</NothingLargeText>
        <NothingSmallText>다시 질문 해주세요!</NothingSmallText>
      </ResultNothingBox>
    </ResultNothingContainer>
  );
};

export default ResultNothing;

const ResultNothingContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  text-align: center;
  justify-content: center;
`;

const ResultNothingBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NothingLargeText = styled.p`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 35px;
  font-weight: 700;
  margin: 0;
`;

const NothingSmallText = styled.p`
  color: ${(props) => props.theme.colors.LIGHTGRAY};
  font-size: 25px;
  font-weight: 700;
  margin: 0;
`;
