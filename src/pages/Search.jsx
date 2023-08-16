import { styled } from "styled-components";
import SmallButton from "../components/SmallButton";
import InsuranceBox from "../components/InsuranceBox";
import ResultNothing from "../components/ResultNothing";
import Loading from "../components/Loading";
import Paging from "./Paging";
import { useState, useEffect } from "react";
import { AxiosSearch } from "../api/SearchResult";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LanguageAtom } from "../assets/atom/LanguageAtom";
import { SearchAll } from "../api/AllResult";
import { HeaderAtom } from "../assets/atom/HeaderAtom";

const Search = () => {
  const [insurance, setInsurance] = useState([]); // 리스트에 나타낼 보험들
  const [count, setCount] = useState(0); // 보험 총 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지, 기본 값 1
  const [insuracePerPage] = useState(3); // 한 페이지에 보여질 보험 개수
  const [indexOfFirstInsurance, setIndexOfFirstInsurance] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [indexOfLastInsurance, setIndexOfLastInsurance] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [currentInsurance, setCurrentInsurance] = useState([]); // 현재 페이지에서 보여지는 보험들
  const [loading, setLoading] = useState(true);
  const { text, language } = JSON.parse(localStorage.getItem("formData"));
  const pageLanguage = useRecoilState(LanguageAtom);

  const [path, setPath] = useRecoilState(HeaderAtom);

  const url = useLocation();

  useEffect(() => {
    setPath(url.pathname);
    console.log(path);
  }, [path]);

  const getInsurance = () => {
    text === ""
      ? SearchAll()
          .then((loanData) => {
            setInsurance(loanData.data);
            setLoading(false);
          })
          .catch((error) => navigate("/404"))
      : AxiosSearch(text, language)
          .then((loanData) => {
            setInsurance(loanData);
            setLoading(false);
          })
          .catch((error) => {
            navigate(`/404/${text}`);
          });
  };

  useEffect(getInsurance, []);

  const setPage = (error) => {
    setCurrentPage(error);
  };

  useEffect(() => {
    setCount(insurance.length);
    setIndexOfLastInsurance(currentPage * insuracePerPage);
    setIndexOfFirstInsurance(indexOfLastInsurance - insuracePerPage);
    setCurrentInsurance(
      insurance.slice(indexOfFirstInsurance, indexOfLastInsurance)
    );
  }, [
    currentPage,
    indexOfLastInsurance,
    indexOfFirstInsurance,
    insurance,
    insuracePerPage,
  ]);

  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };

  return (
    <>
      {loading && <Loading />}
      <PageArea visible={+!loading}>
        <TopContainer>
          <LeftContainer>
            <QuestionArea>
              {text !== ""
                ? pageLanguage[0] === "KOR"
                  ? `${text} 질문에 대한`
                  : pageLanguage[0] === "ENG"
                  ? `For question ${text}`
                  : `${text} 为了`
                : pageLanguage[0] === "KOR"
                ? "전체 보험"
                : pageLanguage[0] === "ENG"
                ? "All Insurances"
                : "全额保险"}
            </QuestionArea>
            <CountArea>
              <LeftCount>
                {pageLanguage[0] === "KOR"
                  ? `${insurance.length} 개 보험`
                  : pageLanguage[0] === "ENG"
                  ? `${insurance.length} insurances`
                  : `${insurance.length} 保险`}
              </LeftCount>
              <RightCount>
                {pageLanguage[0] === "KOR"
                  ? "검색 결과"
                  : pageLanguage[0] === "ENG"
                  ? "Search Results"
                  : "搜索结果"}
              </RightCount>
            </CountArea>
          </LeftContainer>
          <SmallButton
            text={
              pageLanguage[0] === "KOR"
                ? "다시 질문하기"
                : pageLanguage[0] === "ENG"
                ? "Ask Again"
                : "再问一遍"
            }
            handleclick={goMain}
          />
        </TopContainer>
        <BottomArea>
          {insurance.length === 0 ? (
            <ResultNothing />
          ) : (
            <BottomContainer>
              {currentInsurance.map((item) => (
                <InsuranceBox key={item.infoId} loanData={item} />
              ))}
            </BottomContainer>
          )}
        </BottomArea>
        <Paging page={currentPage} count={count} setPage={setPage} />
      </PageArea>
    </>
  );
};

const PageArea = styled.div`
  width: 100%;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const TopContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-top: 31px;
`;

const BottomArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 1170px;
  height: 100%;
  margin: 37px;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  width: 700px;
  height: 90px;
`;

const QuestionArea = styled.div`
  width: 700px;
  height: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const CountArea = styled.div`
  width: 400px;
  height: 65px;
  display: flex;
  align-items: center;
`;

const LeftCount = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const RightCount = styled.p`
  font-size: 25px;
`;

export default Search;
