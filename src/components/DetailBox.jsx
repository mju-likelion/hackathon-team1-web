import { styled } from "styled-components";

const DetailBox = ({ data }) => {
  const { title, content, img } = data;
  return (
    <InsuranceDetailBox>
      <DetailImage src={img} alt="그래프 이미지" />
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

const DetailImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 21px;
`;

const DetailTextBox = styled.div`
  width: 100%;
  height: 60px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #545454;
  margin-bottom: 6px;
`;

const DetailContent = styled.div`
  width: 100%;
  height: 24px;
  font-size: 20px;
  color: #545454;
`;
