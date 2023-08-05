import { styled } from "styled-components";
const SmallButton = ({ text, handleClick }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};

const Button = styled.button`
  width: 170px;
  height: 60px;
  border-radius: 20px;
  font-size: 23px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BLUE};
  border: none;
`;

export default SmallButton;
