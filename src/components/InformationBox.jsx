import styled from "styled-components";
import DownArrow from "../assets/images/DownArrow.svg";
import UpArrow from "../assets/images/UpArrow.svg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const InformationBox = ({ MainData }) => {
  const {
    img,
    title,
    englishTitle,
    chineseTitle,
    content,
    englishContent,
    chineseContent,
    explain,
    englishExplain,
    chineseExplain,
  } = MainData;
  const [showDetail, setShowDetail] = useState(false);

  const pageLanguage = useRecoilState(LanguageAtom);

  return (
    <Layout>
      {showDetail ? (
        <DetailContainer onClick={() => setShowDetail(!showDetail)}>
          <MainBox>
            <Image src={img} alt="설명 이미지" />
            <Title>
              {pageLanguage[0] === "KOR"
                ? title
                : pageLanguage[0] === "ENG"
                ? englishTitle
                : chineseTitle}
            </Title>
            <Content>
              {pageLanguage[0] === "KOR"
                ? content
                : pageLanguage[0] === "ENG"
                ? englishContent
                : chineseContent}
            </Content>
            <Arrow src={UpArrow} alt="위 화살표" />
          </MainBox>
          <ExplainBox>
            <ExplainText>
              {pageLanguage[0] === "KOR"
                ? explain
                : pageLanguage[0] === "ENG"
                ? englishExplain
                : chineseExplain}
            </ExplainText>
          </ExplainBox>
        </DetailContainer>
      ) : (
        <DetailTextContainer onClick={() => setShowDetail(!showDetail)}>
          <Image src={img} alt="설명 이미지" />
          <Title>
            {pageLanguage[0] === "KOR"
              ? title
              : pageLanguage[0] === "ENG"
              ? englishTitle
              : chineseTitle}
          </Title>
          <Content>
            {pageLanguage[0] === "KOR"
              ? content
              : pageLanguage[0] === "ENG"
              ? englishContent
              : chineseContent}
          </Content>
          <Arrow src={DownArrow} alt="아래 화살표" />
        </DetailTextContainer>
      )}
    </Layout>
  );
};

export default InformationBox;

const Layout = styled.div`
  height: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1110px;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: 20px;
  padding: 30px 40px 20px 40px;
  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.STONE};
  }
`;

const DetailTextContainer = styled(DetailContainer)`
  flex-direction: row;
  height: 106px;
  padding: 0 40px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.STONE};
  }
`;

const MainBox = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled.p`
  width: 194px;
  font-size: 35px;
  font-weight: bold;
  margin: 0 27px 0 40px;
`;

const Content = styled.p`
  width: 600px;
  font-size: 25px;
  margin-right: 81px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

const Arrow = styled.img`
  width: 40px;
  height: 20px;
`;

const ExplainBox = styled.div`
  width: 1070px;
  height: auto;
  padding: 40px 0;
  line-height: 27px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY2};
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
`;

const ExplainText = styled.p`
  width: 917px;
  text-align: center;
`;
