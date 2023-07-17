import styled from "styled-components";
import InputBox from "./InputBox";

const HomeBox = styled.main`
  display: flex;
  width: 100svw;
  height: calc(100svh - 200px);
  background-color: tomato;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Home = () => {
  return (
    <HomeBox>
      메인페이지 인풋
      <InputBox type='text' placeholder="아이디입력" />
    </HomeBox>
  );
};

export default Home;
