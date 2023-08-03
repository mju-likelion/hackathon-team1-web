import { styled } from "styled-components";
import SmallButton from "./SmallButton";

const InsuranceBox = ({ loandata }) => {
  const { img, main, company, start, end, cost, type } = loandata;
  return (
    <>
      <ContentArea>
        <LeftContainer>
          <LoanImage src={img} />
        </LeftContainer>
        <RightContainer>
          <TopArea>
            <NameArea>
              <MainName>{main}</MainName>
              <SubName>{company}</SubName>
            </NameArea>
            <SmallButton text="자세히 보기" />
          </TopArea>
          <BottomArea>
            <AgeArea>
              <AgeTitle>가입연령</AgeTitle>
              <AgeContent>
                <AgeNumber>
                  {start}~{end}
                </AgeNumber>
                <AgeUnit>세</AgeUnit>
              </AgeContent>
            </AgeArea>
            <DivLine />
            <CostArea>
              <CostTitle>보험료</CostTitle>
              <CostContent>
                <CostNumber>{cost}</CostNumber>
                <CostUnit>원</CostUnit>
              </CostContent>
            </CostArea>
            <DivLine />
            <JoinArea>
              <JoinTitle>보험료</JoinTitle>
              <JoinContent>
                <JoinType>{type}</JoinType>
              </JoinContent>
            </JoinArea>
          </BottomArea>
        </RightContainer>
      </ContentArea>
    </>
  );
};

const ContentArea = styled.div`
  width: 1170px;
  height: 220px;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 55px;
`;

const LeftContainer = styled.div`
  width: 135px;
  height: 135px;
`;

const LoanImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 47px;
`;

const RightContainer = styled.div`
  width: 880px;
  height: 135px;
`;

const TopArea = styled.div`
  width: 880px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const NameArea = styled.div`
  width: 360px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainName = styled.div`
  width: 230px;
  font-size: 35px;
  font-weight: 600;
`;

const SubName = styled.div`
  width: 120px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.LIGHTGRAY};
`;

const BottomArea = styled.div`
  width: 650px;
  height: 61px;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const AgeArea = styled.div`
  width: 80px;
  height: 61px;
`;

const AgeTitle = styled.div`
  width: 67px;
  height: 22px;
  font-size: 18px;
`;

const AgeContent = styled.div`
  width: 81px;
  height: 29px;
  display: flex;
  margin-top: 10px;
`;

const AgeNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const AgeUnit = styled.div`
  font-size: 18px;
  line-height: 25px;
`;

const DivLine = styled.div`
  width: 2px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  margin-left: 150px;
`;

const CostArea = styled.div`
  width: 80px;
  height: 61px;
`;

const CostTitle = styled.div`
  width: 67px;
  height: 22px;
  font-size: 18px;
`;

const CostContent = styled.div`
  width: 81px;
  height: 29px;
  display: flex;
  margin-top: 10px;
`;

const CostNumber = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const CostUnit = styled.div`
  font-size: 18px;
  line-height: 25px;
`;

const JoinArea = styled.div`
  width: 80px;
  height: 61px;
`;

const JoinTitle = styled.div`
  width: 67px;
  height: 22px;
  font-size: 18px;
`;

const JoinContent = styled.div`
  width: 115px;
  height: 29px;
  display: flex;
  margin-top: 10px;
`;

const JoinType = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export default InsuranceBox;
