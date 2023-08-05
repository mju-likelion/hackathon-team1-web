import { styled } from "styled-components";

const DetailBox = ({ data }) => {
  const { title, content } = data;

  return (
    <InsuranceDetailBox>
      <DetailImage />
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

const DetailImage = styled.div``;

const DetailTextBox = styled.div`
  width: 100%;
  height: 60px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.DARKGRAY};
  margin-bottom: 6px;
`;

const DetailContent = styled.div`
  width: 100%;
  height: 24px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.DARKGRAY};
`;
