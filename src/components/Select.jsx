import styled from "styled-components";
import Korea from "../assets/images/Korea.svg";
import English from "../assets/images/UsaImg.svg";
import Chinese from "../assets/images/China.svg";
import Option from "./Option";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { LanguageAtom } from "../assets/atom/LanguageAtom";

const COUNTRY_DATA = [
  {
    text: "KOR",
    img: Korea,
  },

  {
    text: "ENG",
    img: English,
  },

  {
    text: "CHN",
    img: Chinese,
  },
];

const Select = () => {
  const [country, setCountry] = useRecoilState(LanguageAtom);
  const [countryImage, setCountryImage] = useState(Korea);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const selectedCountry = COUNTRY_DATA.find((item) => item.text === country);

    if (selectedCountry) {
      setCountryImage(selectedCountry.img);
    } else {
      setCountryImage(Korea);
    }
  }, [country]);

  return (
    <Container>
      <CountryImg src={countryImage} alt="국기 이미지" />
      <SelectBox value={country} onChange={handleCountryChange}>
        {COUNTRY_DATA.map((item) => (
          <Option text={item.text} key={item.text} />
        ))}
      </SelectBox>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountryImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const SelectBox = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: ${({ theme }) => theme.colors.BLUE};
  border: none;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
