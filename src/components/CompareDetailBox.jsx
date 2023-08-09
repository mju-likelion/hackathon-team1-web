import styled from "styled-components";

const CompareDetailBox = () => {
  const testArr = JSON.parse(localStorage.getItem("insurances"));
  const rendering = (item, idx) => {
    const result = [];
    if (idx === 0) {
      result.push(<FirstContent>{item}</FirstContent>);
    } else if (idx === 1) {
      result.push(<SecondContent>{item}</SecondContent>);
    } else {
      result.push(<ThirdContent>{item}</ThirdContent>);
    }
    return result;
  };

  return (
    <CompareDetailArea>
      <CompareDetailBoxTitle>가입연령</CompareDetailBoxTitle>
      <DetailBox>
        {testArr.map((item, idx) =>
          rendering(`${item.startAge}~${item.endAge}세`, idx)
        )}
      </DetailBox>
      <CompareDetailBoxTitle>보험료</CompareDetailBoxTitle>
      <DetailBox>
        {testArr.map((item, idx) => rendering(`${item.cost}원`, idx))}
      </DetailBox>
      <CompareDetailBoxTitle>가입형태</CompareDetailBoxTitle>
      <DetailBox>
        {testArr.map((item, idx) => rendering(item.type, idx))}
      </DetailBox>
    </CompareDetailArea>
  );
};

const CompareDetailArea = styled.div`
  width: 1160px;
  height: auto;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CompareDetailBoxTitle = styled.p`
  width: 1160px;
  height: 23px;
  font-size: 20px;
  font-weight: 600;
`;

const DetailBox = styled.div`
  width: 1160px;
  height: 106px;
  margin: 11px auto;
  padding: 19px 71px;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 25px;
  display: flex;
  align-items: center;
`;

const FirstContent = styled.div`
  width: 150px;
  height: 100px;
  margin-left: 50px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecondContent = styled.div`
  width: 150px;
  height: 100px;
  margin-left: 235px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThirdContent = styled.div`
  width: 150px;
  height: 100px;
  margin-left: 235px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CompareDetailBox;
