import React from "react";
import styled from "styled-components";

const CompareDetailBox = ({ compareInsurance }) => {
  const rendering = (item, idx) => {
    return (
      <DetailContent
        key={new Date().getTime() + idx}
        idx={idx === 0 ? "85px" : "248px"}
      >
        {item}
      </DetailContent>
    );
  };

  return (
    <CompareDetailArea>
      <CompareDetailBoxTitle>가입연령</CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(`${item.startAge}~${item.endAge}세`, idx)
        )}
      </DetailBox>
      <CompareDetailBoxTitle>보험료</CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) => rendering(`${item.cost}원`, idx))}
      </DetailBox>
      <CompareDetailBoxTitle>가입형태</CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) => rendering(item.type, idx))}
      </DetailBox>
    </CompareDetailArea>
  );
};

const CompareDetailArea = styled.div`
  width: 1110px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 11px;
`;

const CompareDetailBoxTitle = styled.div`
  width: 1110px;
  height: 23px;
  font-size: 20px;
  font-weight: 600;
`;

const DetailBox = styled.div`
  width: 1110px;
  height: 106px;
  margin: 11px auto;
  box-shadow: 0 2px 10px 0 ${({ theme }) => theme.colors.LIGHTGRAY};
  border-radius: 25px;
  display: flex;
`;

const DetailContent = styled.div`
  width: 150px;
  margin-left: ${(props) => props.idx};
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CompareDetailBox;
