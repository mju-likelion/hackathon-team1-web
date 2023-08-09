import styled from "styled-components";
import Spinner from "../assets/images/Spinner.gif";

const Loading = () => {
  return (
    <Background>
      <SpinnerImgBox>
        <SpinnerImg src={Spinner} alt="Spinner" />
      </SpinnerImgBox>
      <LoadingText>열심히 보험을 찾고 있어요!</LoadingText>
    </Background>
  );
};

export default Loading;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinnerImgBox = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 7px;
`;

const SpinnerImg = styled.img`
  object-fit: contain;
`;

const LoadingText = styled.p`
  width: auto;
  height: 28px;
  font-size: 28px;
  color: ${(props) => props.theme.colors.DARKGREY};
`;
