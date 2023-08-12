import { useState } from "react";
import { styled } from "styled-components";
import Logo from "../assets/images/Logo.svg";
import Airplane from "../assets/images/Airplane.svg";
import { useNavigate } from "react-router-dom";
import { DetectLanguage } from "../api/DetectLanguage";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ko");
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

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
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

  return (
    <div>
      <LogoImg src={Logo} alt="LogoImg" />
      <SearchForm onSubmit={handleSubmit}>
        <SearchLanguageSelect
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {detectedLanguage === "ko" && (
            <option value={detectedLanguage}>KO</option>
          )}
          {detectedLanguage === "en" && <option value="en">EN</option>}
          {detectedLanguage === "zh" && <option value="zh">ZH</option>}
        </SearchLanguageSelect>
        <SearchInput
          value={searchTerm}
          onChange={handleInputChange}
        ></SearchInput>
        <SearchButton>
          <SearchButtonImg src={Airplane} alt="AirplaneImg" />
        </SearchButton>
      </SearchForm>
      <SearchExample>질문은 이렇게 해주세요..!</SearchExample>
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
  border: 1px solid #168ce3;
  border-radius: 25px;
  margin: auto;
  margin-top: 24px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const SearchLanguageSelect = styled.select`
  width: 70px;
  height: 100%;
  border: 0;
  border-radius: 25px;
  font-size: 23px;
`;

const SearchInput = styled.input`
  width: 600px;
  height: 100%;
  border: 0;
  font-size: 25px;
`;

const SearchButton = styled.button`
  width: 48px;
  height: 100%;
`;

const SearchButtonImg = styled.img`
  width: 48px;
  height: 48px;
`;
const SearchExample = styled.p`
  width: 900px;
  font-size: 30px;
  color: #7e7d7d;
  margin: 35px auto auto auto;
`;

export default Main;
