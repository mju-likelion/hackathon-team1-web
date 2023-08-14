import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFound = ({ number }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <WhiteBackGround>
        <ErrorCode>{number}</ErrorCode>
      </WhiteBackGround>
      <MintBackGround>
        <ErrorText>죄송합니다. 페이지를 찾을 수 없습니다.</ErrorText>
        <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
      </MintBackGround>
    </Layout>
  );
};

export default NotFound;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
`;

const WhiteBackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
const MintBackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
`;

const ErrorCode = styled.div`
  display: flex;
  font-size: 200px;
  width: 422px;
  height: 195px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.SKYBLUE};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 40px;
  font-weight: bold;
  margin-top: 70px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.BLUE};
  border-radius: 25px;
  margin-top: 25px;
`;
