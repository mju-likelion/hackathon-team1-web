import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LogoAtom } from "../assets/atom/LogoAtom";
import { LanguageAtom } from "../assets/atom/LanguageAtom";
import SmallButton from "./SmallButton";

const ResultNothing = () => {
  const navigate = useNavigate();
  const params = useParams();
  const pageLanguage = useRecoilState(LanguageAtom);

  const [showLogo, setShowLogo] = useRecoilState(LogoAtom);

  const goMain = () => {
    navigate("/");
    setShowLogo(false);
  };

  return (
    <ResultNothingContainer>
      <TopContainer>
        <LeftContainer>
          <QuestionArea>
            {pageLanguage[0] === "KOR"
              ? `'${params.text}' 질문에 대한`
              : pageLanguage[0] === "ENG"
              ? `For question '${params.text}'`
              : `'${params.text}' 为了`}
          </QuestionArea>
          <CountArea>
            <LeftCount>
              {pageLanguage[0] === "KOR"
                ? `0개 보험`
                : pageLanguage[0] === "ENG"
                ? `0 insurances`
                : `0 保险`}
            </LeftCount>
            <RightCount>
              {pageLanguage[0] === "KOR"
                ? "검색 결과"
                : pageLanguage[0] === "ENG"
                ? "Search Results"
                : "搜索结果"}
            </RightCount>
          </CountArea>
        </LeftContainer>
        <SmallButton
          text={
            pageLanguage[0] === "KOR"
              ? "다시 질문하기"
              : pageLanguage[0] === "ENG"
              ? "Ask Again"
              : "再问一遍"
          }
          handleclick={goMain}
        />
      </TopContainer>
      <ResultNothingBox>
        <NothingLargeText>
          {pageLanguage[0] === "KOR"
            ? "검색 결과를 찾을 수 없습니다."
            : pageLanguage[0] === "ENG"
            ? "Can't Find Result."
            : "没有找到搜索结果。"}
        </NothingLargeText>
        <NothingSmallText>
          {pageLanguage[0] === "KOR"
            ? "다시 질문 해주세요!"
            : pageLanguage[0] === "ENG"
            ? "Please Ask Again!"
            : "再问一遍！"}
        </NothingSmallText>
      </ResultNothingBox>
    </ResultNothingContainer>
  );
};

export default ResultNothing;

const ResultNothingContainer = styled.div`
  width: 100%;
  height: 60vh;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-top: 31px;
`;

const ResultNothingBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 196px;
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

const LeftContainer = styled.div`
  width: 700px;
  height: 90px;
`;

const QuestionArea = styled.div`
  width: 700px;
  height: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const CountArea = styled.div`
  width: 400px;
  height: 65px;
  display: flex;
  align-items: center;
`;

const LeftCount = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const RightCount = styled.p`
  font-size: 25px;
`;
