import styled from "styled-components";
import Korea from "../assets/Korea.svg";
import English from "../assets/USA.svg";
import Chinese from "../assets/China.svg";
import Option from "./Option";
import { useEffect, useState } from "react";

const data = [
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
  const [country, setCountry] = useState("KOR");
  const [countryImage, setCountryImage] = useState(Korea);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const selectedCountry = data.find((item) => item.text === country);

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
        {data.map((item, idx) => (
          <Option text={item.text} key={idx} />
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
`;

const SelectBox = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #168ce3;
  border: none;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
