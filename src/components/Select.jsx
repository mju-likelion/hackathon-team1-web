import styled from "styled-components";
import Korea from "../assets/Korea.svg";
import English from "../assets/USA.svg";
import Chinese from "../assets/China.svg";
import { useState } from "react";

const Select = () => {
  const [country, setCountry] = useState("Korea");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const getImageByCountry = (countryCode) => {
    switch (countryCode) {
      case "Korea":
        return Korea;
      case "English":
        return English;
      case "Chinese":
        return Chinese;
      default:
        return Korea;
    }
  };

  return (
    <Container>
      <CountryImg src={getImageByCountry(country)} alt="국기 이미지" />
      <SelectBox value={country} onChange={handleCountryChange}>
        <option key="korean" value="Korea">
          KOR
        </option>
        <option key="english" value="English">
          ENG
        </option>
        <option key="chinese" value="Chinese">
          CHN
        </option>
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
