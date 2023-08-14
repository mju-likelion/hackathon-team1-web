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
          {title === "가입연령" ? (
            <DetailContent>
              {firstContent}~{secondContent}세
            </DetailContent>
          ) : (
            <DetailContent>
              남 {firstContent}원{"\n"}여 {secondContent}원
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
  width: 141px;
  height: 33px;
  font-size: 25px;
  line-height: 33px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: bold;
  white-space: pre-line;
`;
