import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const DetailBox = ({ insuranceData }) => {
  const { firstContent, secondContent, title } = insuranceData;

  const navigate = useNavigate();

  if (!insuranceData) {
    navigate("/");
  }

  return (
    <>
      <InsuranceDetailBox>
        <DetailTextBox>
          <DetailTitle>{title}</DetailTitle>
          {(() => {
            switch (title) {
              case "가입연령":
                return (
                  <DetailContent>
                    {firstContent}~{secondContent}세
                  </DetailContent>
                );
              case "보험료":
                return (
                  <DetailContent>
                    남 {firstContent}원{"\n"}여 {secondContent}원
                  </DetailContent>
                );
              default:
                return null;
            }
          })()}
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
  line-height: 2rem;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
`;

const DetailContent = styled.div`
  width: 141px;
  height: 33px;
  font-size: 25px;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: bold;
  white-space: pre-line;
`;
