import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const CompareDetailBox = ({ compareInsurance }) => {
  const pageLanguage = useRecoilValue(LanguageAtom);

  const rendering = (item, idx) => {
    return (
      <DetailContent
        key={new Date().getTime() + idx}
        margin={idx === 0 ? "85px" : "105px"}
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
          rendering(
            `${item.insuranceAgeGroupStart}~${item.insuranceAgeGroupEnd}세`,
            idx
          )
        )}
      </DetailBox>
      <CompareDetailBoxTitle>보험료</CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(
            `남 ${item.premiumMale} ${"\n"} / 여 ${item.premiumFemale}원`,
            idx
          )
        )}
      </DetailBox>
      <CompareDetailBoxTitle>가입형태</CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(item.registrationType, idx)
        )}
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
  width: 245px;
  margin-left: ${(props) => props.margin};
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CompareDetailBox;
