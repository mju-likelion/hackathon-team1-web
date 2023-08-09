import { styled } from "styled-components";

const DetailBox = ({ InsuranceData }) => {
  const { title, content } = InsuranceData;

  return (
    <InsuranceDetailBox>
      <DetailTextBox>
        <DetailTitle>{title}</DetailTitle>
        <DetailContent>{content}</DetailContent>
      </DetailTextBox>
    </InsuranceDetailBox>
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
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
`;

const DetailContent = styled.div`
  width: 141px;
  height: 33px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: bold;
`;
