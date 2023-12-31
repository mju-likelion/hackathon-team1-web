import { styled } from "styled-components";

const LargeButton = ({ text, handleClick }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.BLUE};
  color: ${({ theme }) => theme.colors.WHITE};
  width: 300px;
  height: 50px;
  border-radius: 25px;
  font-size: 23px;
  font-weight: bold;
`;

export default LargeButton;
