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
import BlueUpArrow from "../assets/images/BlueUpArrow.svg";
import BlueDownArrow from "../assets/images/BlueDownArrow.svg";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchBarClick, setSearchBarClick] = useState(false);
  const [exampleClick, setExampleClick] = useState(false);
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

  const handleExampleClick = (exampleClick) => {
    setExampleClick((prevExampleClick) => !prevExampleClick);
  };

  const ExampleTitle = {
    1: (() => {
      if (pageLanguage[0] === "KOR") {
        return "1. 원하시는 보험사를 입력해주시면 추천해드릴게요 ( ˃ᴗ˂ )";
      } else if (pageLanguage[0] === "ENG") {
        return "1. If you provide the insurance company you want, I'll recommend it for you ( ˃ᴗ˂ )";
      } else {
        return "1. 提供您想要的保险公司，我会为您推荐 ( ˃ᴗ˂ )";
      }
    })(),
    2: (() => {
      if (pageLanguage[0] === "KOR") {
        return "2. 성별 나이를 입력해주시면 원하시는 보험을 보실 수 있어요";
      } else if (pageLanguage[0] === "ENG") {
        return "2. You can see the insurance you want by providing your gender and age";
      } else {
        return "2. 提供您的性别和年龄，您可以看到您想要的保险";
      }
    })(),
    3: (() => {
      if (pageLanguage[0] === "KOR") {
        return "3. 보험료, 가격은 소숫점 없이. 보험 가격지수는 소숫점 포함해서";
      } else if (pageLanguage[0] === "ENG") {
        return "3. Insurance premiums, prices are without decimals. Insurance price index includes decimals";
      } else {
        return "3. 保险费，价格没有小数点。保险价格指数包括小数点";
      }
    })(),
  };

  const ExampleContent = {
    1: (() => {
      if (pageLanguage[0] === "KOR") {
        return "교보생명, 농협 손해보험, 농협생명, 동양생명, 롯데 손해보험, 메리츠화재, MG 손해보험,\n 삼성생명, 삼성화재, DB 손해보험, DB생명, 현대해상, 한화 손해보험, 한화생명, 흥국 생명, 흥국화재";
      } else if (pageLanguage[0] === "ENG") {
        return "Kyobo Life, NongHyup Property Insurance, NongHyup Life, Oriental Life, Lotte Non-Life Insurance, Meritz Fire & Marine Insurance, MG Non-Life Insurance,\n Samsung Life, Samsung Fire & Marine Insurance, DB Non-Life Insurance, DB Life, Hyundai Marine & Fire Insurance, Hanwha Non-Life Insurance, Hanwha Life, Heungkuk Life, Heungkuk Fire";
      } else {
        return "교보생명, 农协财产保险, 农协人寿, 东洋人寿, 乐天财产保险, 三星人寿, 三星财产保险, DB 财产保险, DB 人寿, 现代海上, 韩华财产保险, 韩华人寿, 兴国人寿, 兴国财产保险";
      }
    })(),
    2: (() => {
      if (pageLanguage[0] === "KOR") {
        return '" 43살 남자 보험 추천해줘!"';
      } else if (pageLanguage[0] === "ENG") {
        return '"Recommend insurance for a 43-year-old man!"';
      } else {
        return '"推荐给一个43岁的男人的保险！"';
      }
    })(),
    3: (() => {
      if (pageLanguage[0] === "KOR") {
        return "5000원, 20세, 30살, 40대, 96.5%(퍼, 퍼센트) (O)\n오천원, 5000.0원, 20.0세, 96% (X)";
      } else if (pageLanguage[0] === "ENG") {
        return "₩5000, 20 years old, 30 years old, 40s, 96.5% (per, percent) (O)\nfive-thousand won, ₩5000.0, 20.0 years old, 96% (X)";
      } else {
        return "5000韩元，20岁，30岁，40多岁，96.5%（每，百分之）（√）\n5000.0韩元，20.0岁，96%（X）";
      }
    })(),
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
      <SearchExample onClick={handleExampleClick} exampleClick={exampleClick}>
        {exampleClick ? (
          <>
            <SearchExampleContainer>
              {Object.keys(ExampleTitle).map((key) => (
                <div key={key}>
                  <SearchExampleTitle>{ExampleTitle[key]}</SearchExampleTitle>
                  <SearchExampleContent>
                    {ExampleContent[key]}
                  </SearchExampleContent>
                </div>
              ))}
            </SearchExampleContainer>
            <ArrowBox>
              <ArrowImgBox>
                <ArrowImg src={BlueUpArrow} alt="UpArrowImg" />
              </ArrowImgBox>
            </ArrowBox>
          </>
        ) : (
          <>
            이 질문 양식을 꼭 지켜주세요 !
            <ArrowBox>
              Click!
              <ArrowImgBox>
                <ArrowImg src={BlueDownArrow} alt="DownArrowImg" />
              </ArrowImgBox>
            </ArrowBox>
          </>
        )}
      </SearchExample>
    </div>
  );
};

const LogoImg = styled.img`
  width: 417px;
  height: 79px;
  margin: auto;
  margin-top: 120px;
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
    color: ${({ theme }) => theme.colors.LIGHTGRAY};
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
  width: 770px;
  height: 100%;
  font-size: 25px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  color: ${(props) => props.theme.colors.LIGHTGRAY};
  margin: 35px auto auto auto;
  padding-left: 20px;
`;

const SearchExample = styled.button`
  width: 900px;
  background-color: ${(props) => props.theme.colors.LIGHTGRAY2};
  color: ${(props) => props.theme.colors.DARKGRAY};
  margin: 40px auto 70px auto;
  text-align: left;
  white-space: pre-line;
  line-height: 40px;
  padding: 20px 20px 20px 30px;
  border: none;
  border-radius: 25px;
  font-size: 23px;
  font-weight: 600;
  justify-content: space-between;
  display: flex;
`;

const ArrowImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ArrowBox = styled.div`
  width: auto;
  height: auto;
  color: ${(props) => props.theme.colors.BLUE};
  display: flex;
  margin-right: 20px;
`;

const ArrowImgBox = styled.div`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.BLUE};
`;

const SearchExampleContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const SearchExampleTitle = styled.p`
  font-size: 23px;
  font-weight: 700;
`;

const SearchExampleContent = styled.p`
  font-size: 20px;
  margin: 7px 0 10px 15px;
  color: ${(props) => props.theme.colors.LIGHTGRAY};
`;

export default Main;
