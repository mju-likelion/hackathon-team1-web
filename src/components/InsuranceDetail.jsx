import { styled } from "styled-components";

const InsuranceDetail = ({ title, content, unit }) => {
  return (
    <DetailArea>
      <DetailTitle>{title}</DetailTitle>
      <DetailBox>
        <DetailContent>{content}</DetailContent>
        <DetailUnit>{unit}</DetailUnit>
      </DetailBox>
    </DetailArea>
  );
};

const DetailArea = styled.div`
  width: 125px;
  height: 61px;
`;

const DetailTitle = styled.p`
  font-size: 18px;
`;

const DetailBox = styled.div`
  width: 150px;
  height: 29px;
  display: flex;
  margin-top: 10px;
  white-space: pre-line;
`;

const DetailContent = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const DetailUnit = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-left: 5px;
`;

export default InsuranceDetail;
