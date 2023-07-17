import styled from "styled-components";
import InputBox from "./InputBox";

const HomeBox = styled.main`
  width: 100svw;
  height: calc(100svh - 200px);
  background-color: tomato;
`

const Home = ()=>{
  return(
    <HomeBox>
      메인페이지 인풋
      <InputBox />
    </HomeBox>
  )
}

export default Home;