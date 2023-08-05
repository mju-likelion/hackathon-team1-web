import { styled } from "styled-components";
import SmallButton from "./SmallButton";

const InsuranceBox = ({ loanData }) => {
  const { img, main, company, start, end, cost, type } = loanData;
  return (
    <>
      <ContentArea>
        <LeftBox>
          <LoanImage src={img} alt="loan-image" />
        </LeftBox>
        <RightBox>
          <TopArea>
            <NameArea>
              <MainName>{main}</MainName>
              <SubName>{company}</SubName>
            </NameArea>
            <SmallButton text="자세히 보기" />
          </TopArea>
          <BottomArea>
            <StyledArea>
              <StyledTitle>가입연령</StyledTitle>
              <StyledContent>
                <StyledDetail>
                  {start}~{end}
                </StyledDetail>
                <StyledUnit>세</StyledUnit>
              </StyledContent>
            </StyledArea>
            <DivLine />
            <StyledArea>
              <StyledTitle>보험료</StyledTitle>
              <StyledContent>
                <StyledDetail>{cost}</StyledDetail>
                <StyledUnit>원</StyledUnit>
              </StyledContent>
            </StyledArea>
            <DivLine />
            <StyledArea>
              <StyledTitle>보험료</StyledTitle>
              <StyledContent>
                <StyledDetail>{type}</StyledDetail>
              </StyledContent>
            </StyledArea>
          </BottomArea>
        </RightBox>
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

const LeftBox = styled.div`
  width: 135px;
  height: 135px;
`;

const LoanImage = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 47px;
`;

const RightBox = styled.div`
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

const MainName = styled.p`
  font-size: 35px;
  font-weight: 600;
`;

const SubName = styled.p`
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

const StyledArea = styled.div`
  width: 80px;
  height: 61px;
`;

const StyledTitle = styled.div`
  width: 67px;
  height: 22px;
  font-size: 18px;
`;

const StyledContent = styled.div`
  width: 110px;
  height: 29px;
  display: flex;
  margin-top: 10px;
`;

const StyledDetail = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const StyledUnit = styled.p`
  font-size: 18px;
  line-height: 25px;
`;

const DivLine = styled.div`
  width: 2px;
  height: 57px;
  background-color: ${({ theme }) => theme.colors.LIGHTGRAY};
  margin-left: 150px;
`;

export default InsuranceBox;
