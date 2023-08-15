import { styled } from "styled-components";

const SmallButton = ({ text, handleclick }) => {
  return <Button onClick={handleclick}>{text}</Button>;
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
