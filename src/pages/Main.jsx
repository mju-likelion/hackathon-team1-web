import { useState } from "react";
import { styled } from "styled-components";
import Logo from "../assets/images/Logo.svg";
import Airplane from "../assets/images/Airplane.svg";
import { useNavigate } from "react-router-dom";
import { DetectLanguage } from "../api/DetectLanguage";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length > 2) {
      DetectLanguage(event.target.value)
        .then((language) => {
          console.log(language);
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

    const formData = {
      text: searchTerm,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    navigate(`/search/${searchTerm}`);
    // 여기에 검색어를 이용한 검색 로직을 추가하세요.
  };

  const NowSelectedLanguage = () => {
    if (detectedLanguage === "ko") {
      return "한국어로 입력 중이시네요!";
    } else if (detectedLanguage === "en") {
      return "You are typing in English!";
    } else if (detectedLanguage === "zh") {
      return "你正在输入中文！";
    } else {
      return "한국어, 中国人, English 중에서 입력 해주세요!";
    }
  };

  return (
    <div>
      <LogoImg src={Logo} alt="LogoImg" />
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          value={searchTerm}
          onChange={handleInputChange}
        ></SearchInput>
        <SearchButton>
          <SearchButtonImg src={Airplane} alt="AirplaneImg" />
        </SearchButton>
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
  height: 95px;
  border: 3px solid ${(props) => props.theme.colors.BLUE};
  border-radius: 25px;
  margin: auto;
  margin-top: 24px;
  padding: 20px 35px;
  display: flex;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 25px;
`;

const SearchButton = styled.button`
  width: 48px;
  height: 100%;
  margin-left: 20px;
`;

const SearchButtonImg = styled.img`
  width: 48px;
  height: 48px;
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
