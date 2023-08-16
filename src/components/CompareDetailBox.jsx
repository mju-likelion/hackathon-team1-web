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
        margin={idx === 0 ? "85px" : "55px"}
      >
        {item}
      </DetailContent>
    );
  };

  return (
    <CompareDetailArea>
      <CompareDetailBoxTitle>
        {pageLanguage === "KOR"
          ? "가입연령"
          : pageLanguage === "ENG"
          ? "Join age"
          : "入学年龄"}
      </CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(
            pageLanguage === "KOR"
              ? `${item.insuranceAgeGroupStart}~${item.insuranceAgeGroupEnd}세`
              : pageLanguage === "ENG"
              ? `${item.insuranceAgeGroupStart}~${item.insuranceAgeGroupEnd}years`
              : `${item.insuranceAgeGroupStart}~${item.insuranceAgeGroupEnd}岁`,
            idx
          )
        )}
      </DetailBox>
      <CompareDetailBoxTitle>
        {pageLanguage === "KOR"
          ? "보험료"
          : pageLanguage === "ENG"
          ? "Premium"
          : "优质的"}
      </CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(
            pageLanguage === "KOR"
              ? `남 ${item.premiumMale.toLocaleString(
                  "en-US"
                )} / 여 ${item.premiumFemale.toLocaleString("en-US")}원`
              : pageLanguage === "ENG"
              ? `M ${item.premiumMale.toLocaleString(
                  "en-US"
                )} / F ${item.premiumFemale.toLocaleString("en-US")}won`
              : `男 ${item.premiumMale.toLocaleString(
                  "en-US"
                )} / 女 ${item.premiumFemale.toLocaleString("en-US")}元`,
            idx
          )
        )}
      </DetailBox>
      <CompareDetailBoxTitle>
        {pageLanguage === "KOR"
          ? "가입형태"
          : pageLanguage === "ENG"
          ? "Type"
          : "订阅类型"}
      </CompareDetailBoxTitle>
      <DetailBox>
        {compareInsurance.map((item, idx) =>
          rendering(
            pageLanguage === "KOR"
              ? item.languages["registration type"].KR
              : pageLanguage === "ENG"
              ? item.languages["registration type"].EN
              : item.languages["registration type"].CN,
            idx
          )
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
  width: 275px;
  margin-left: ${(props) => props.margin};
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CompareDetailBox;
