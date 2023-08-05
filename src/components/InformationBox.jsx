import styled from "styled-components";
import DownArrow from "../assets/images/DownArrow.svg";
import UpArrow from "../assets/images/UpArrow.svg";
import { useState } from "react";

const InformationBox = ({ data }) => {
  const { img, title, content } = data;

  const [showDetail, setshowDetail] = useState(false);

  const handleShowDetail = () => {
    setshowDetail((prev) => !prev);
  };

  return (
    <A>
      {showDetail ? (
        <DetailContainer onClick={handleShowDetail}>
          <MainBox>
            <Image src={img} alt="설명 이미지" />
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Arrow src={UpArrow} alt="위 화살표" />
          </MainBox>
          <ExplainBox>
            <ExplainText>
              이 상품은 예금자보호법에 따라 예금보험공사가 1인당 “최고 5천만원”
              한도로 보호합니다.
              <br />
              (단, 법인 계약 제외)
            </ExplainText>
          </ExplainBox>
        </DetailContainer>
      ) : (
        <Container onClick={handleShowDetail}>
          <Image src={img} alt="설명 이미지" />
          <Title>{title}</Title>
          <Content>{content}</Content>
          <Arrow src={DownArrow} alt="아래 화살표" />
        </Container>
      )}
    </A>
  );
};

export default InformationBox;

const A = styled.div`
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
  box-shadow: 0px 2px 10px rgb(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.STONE};
  }
`;

const Container = styled(DetailContainer)`
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
  height: 170px;
  background-color: #f9f9f9;
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
