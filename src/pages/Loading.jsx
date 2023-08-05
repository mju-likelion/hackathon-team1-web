import styled from "styled-components";
import Spinner from "../assets/images/Spinner.gif";

const Loading = () => {
  return (
    <Background>
        <SpinnerImg src={Spinner} alt="Spinner"/>
        <LoadingText>열심히 보험을 찾고 있어요!</LoadingText>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  width: 1280px;
  height: 832px;
  background-color: rgba(217, 217, 217, 0.50);
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SpinnerImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 7px;
`

const LoadingText = styled.p`
  width: auto;
  height: 28px;
  font-size: 28px;
  color: #7E7D7D;

`