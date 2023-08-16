import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LogoAtom } from "../assets/atom/LogoAtom";

const ResultNothing = () => {
  const navigate = useNavigate();

  const [showLogo, setShowLogo] = useRecoilState(LogoAtom);

  const handleClick = () => {
    navigate("/");
    setShowLogo(false);
  };

  return (
    <ResultNothingContainer>
      <ResultNothingBox>
        <NothingLargeText>검색 결과를 찾을 수 없습니다.</NothingLargeText>
        <NothingSmallText>다시 질문 해주세요!</NothingSmallText>
        <Button onClick={handleClick}>홈으로 돌아가기</Button>
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
  align-items: center;
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

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BLUE};
  border-radius: 25px;
  margin-top: 25px;
`;
