import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import Logo from "../assets/images/Logo.svg";
import Airplane from "../assets/images/Airplane.svg";
import XIcon from "../assets/images/XIcon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { DetectLanguage } from "../api/DetectLanguage";
import { useRecoilState } from "recoil";
import { HeaderAtom } from "../assets/atom/HeaderAtom";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchBarClick, setSearchBarClick] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const pageLanguage = useRecoilState(LanguageAtom);
  const [path, setPath] = useRecoilState(HeaderAtom);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  const url = useLocation();

  useEffect(() => {
    setPath(url.pathname);
  }, [path]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 2) {
      DetectLanguage(event.target.value)
        .then((language) => {
          if (language === "zh") language = "zh-CN";
          setDetectedLanguage(language);
        })
        .catch((error) => {
          console.log("Error detecting language:", error);
          setDetectedLanguage("");
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      const newHistory = [
        { text: searchTerm, language: detectedLanguage },
        ...searchHistory.slice(0, 4),
      ];
      setSearchHistory(newHistory);
      setSearchTerm("");
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    }

    const formData = {
      text: searchTerm,
      language: detectedLanguage,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    if (searchTerm === "") {
      navigate(`/nestjs/api/insurance-suggesters/all`);
    } else {
      navigate(`/nestjs/api/insurance-suggesters`);
    }
  };

  const handleDelete = (index) => {
    const newHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  const NowSelectedLanguage = () => {
    if (detectedLanguage === "ko") {
      return "한국어로 입력 중이시네요!";
    } else if (detectedLanguage === "en") {
      return "You are typing in English!";
    } else if (detectedLanguage === "zh-CN") {
      return "你正在输入中文！";
    } else {
      if (pageLanguage[0] === "ENG") {
        return "Please enter Korean, Chinese, and English";
      } else if (pageLanguage[0] === "CHN") {
        return "请输入韩语，中文，英语。";
      } else {
        return "한국어, 중국어, 영어 중에서 입력 해주세요!";
      }
    }
  };

  const handleDocumentClick = (e) => {
    if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
      setSearchBarClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleResentResearchClick = (historyItem) => {
    setSearchTerm(historyItem.text);
    setDetectedLanguage(historyItem.language);

    const formData = {
      text: historyItem.text,
      language: historyItem.language,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    const updatedHistory = searchHistory.filter(
      (item) =>
        item.text !== historyItem.text || item.language !== historyItem.language
    );
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div>
      <LogoImg src={Logo} alt="LogoImg" />
      <SearchForm onSubmit={handleSubmit} $searchbarclick={searchBarClick}>
        <SearchArea>
          <SearchLabel onClick={() => setSearchBarClick(true)}>
            <SearchInput
              ref={searchInputRef}
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="3개 국어로 보험 정보를 제공하는 NEARHOOD에 오신 것을 환영합니다!"
            ></SearchInput>
          </SearchLabel>
          <SearchButton>
            <SearchButtonImg src={Airplane} alt="AirplaneImg" />
          </SearchButton>
        </SearchArea>
        {searchBarClick && (
          <>
            {searchHistory.length > 0 && <ResentResearchLine />}
            {searchHistory.map((historyItem, index) => (
              <ResentResearchTextLine key={index}>
                <ResentResearchTextBtn
                  onClick={() => handleResentResearchClick(historyItem)}
                >
                  {historyItem.text}
                </ResentResearchTextBtn>
                <ResearchDeleteBtn onClick={() => handleDelete(index)}>
                  <ResearchDeleteBtnImg src={XIcon} />
                </ResearchDeleteBtn>
              </ResentResearchTextLine>
            ))}
          </>
        )}
      </SearchForm>

      <SearchLanguageText>{NowSelectedLanguage()}</SearchLanguageText>
      <SearchExample>질문은 이렇게 입력해주세요 :)</SearchExample>
    </div>
  );
};

const LogoImg = styled.img`
  width: 417px;
  height: 79px;
  margin: auto;
  margin-top: 130px;
  display: flex;
`;

const SearchForm = styled.form`
  width: 900px;
  height: ${(props) => (props.$searchbarclick === true ? "100%" : "95px")};
  border: 3px solid ${(props) => props.theme.colors.BLUE};
  border-radius: 25px;
  margin: auto;
  margin-top: 24px;
  padding: 20px 35px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchLabel = styled.label`
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 756px;
  height: 49px;
  border: 0;
  font-size: 25px;
  &::placeholder {
    text-align: center;
  }
`;

const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  margin-left: 20px;
`;

const SearchButtonImg = styled.img`
  width: 48px;
  height: 48px;
`;

const ResentResearchLine = styled.div`
  border-top: 3px solid ${(props) => props.theme.colors.BLUE};
  margin-top: 12px;
`;

const ResentResearchTextLine = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 7px;
`;

const ResentResearchTextBtn = styled.button`
  width: auto;
  height: 100%;
  font-size: 25px;
  text-align: left;
`;

const ResearchDeleteBtn = styled.button`
  width: 25px;
  height: 25px;
`;
const ResearchDeleteBtnImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SearchLanguageText = styled.p`
  width: 900px;
  font-size: 27px;
  color: ${(props) => props.theme.colors.DARKGRAY};
  margin: 35px auto auto auto;
  padding-left: 20px;
`;

const SearchExample = styled.p`
  width: 900px;
  font-size: 30px;
  color: ${(props) => props.theme.colors.LIGHTGRAY};
  margin: 40px auto auto auto;
  padding-left: 20px;
`;

export default Main;
