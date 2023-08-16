import styled from "styled-components";
import Spinner from "../assets/images/Spinner.gif";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const Loading = () => {
  const pageLanguage = useRecoilState(LanguageAtom);
  console.log(pageLanguage[0]);
  return (
    <Background>
      <SpinnerImgBox>
        <SpinnerImg src={Spinner} alt="Spinner" />
      </SpinnerImgBox>
      <LoadingText>
        {pageLanguage[0] === "KOR"
          ? "열심히 보험을 찾고 있어요!"
          : pageLanguage[0] === "ENG"
          ? "Looking for insurance!"
          : "我在找保险！"}
      </LoadingText>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerImgBox = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 7px;
`;

const SpinnerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingText = styled.p`
  width: auto;
  height: 28px;
  font-size: 28px;
  color: ${(props) => props.theme.colors.DARKGREY};
`;
