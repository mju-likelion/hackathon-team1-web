import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const DetailBox = ({ insuranceData }) => {
  const { firstContent, secondContent, title, englishTitle, chineseTitle } =
    insuranceData;

  const navigate = useNavigate();

  const pageLanguage = useRecoilValue(LanguageAtom);

  if (!insuranceData) {
    navigate("/");
  }

  return (
    <>
      <InsuranceDetailBox>
        <DetailTextBox>
          <DetailTitle>
            {pageLanguage === "KOR"
              ? title
              : pageLanguage === "ENG"
              ? englishTitle
              : chineseTitle}
          </DetailTitle>
          {title === "가입연령" ? (
            <DetailContent>
              {pageLanguage === "KOR"
                ? `${firstContent}~${secondContent}세`
                : pageLanguage === "ENG"
                ? `${firstContent}~${secondContent}years`
                : `${firstContent}~${secondContent}岁`}
            </DetailContent>
          ) : (
            <DetailContent>
              {pageLanguage === "KOR"
                ? `남 ${firstContent}원${"\n"}여 ${secondContent}원`
                : pageLanguage === "ENG"
                ? `Male ${firstContent}won${"\n"}Female ${secondContent}won`
                : `男 ${firstContent}元${"\n"}女 ${secondContent}元`}
            </DetailContent>
          )}
        </DetailTextBox>
      </InsuranceDetailBox>
    </>
  );
};

export default DetailBox;

const InsuranceDetailBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-bottom: 23px;
`;

const DetailTextBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;

const DetailTitle = styled.div`
  width: 80px;
  height: 34px;
  line-height: 34px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
`;

const DetailContent = styled.div`
  width: 220px;
  height: 33px;
  font-size: 25px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: bold;
  white-space: pre-line;
`;
