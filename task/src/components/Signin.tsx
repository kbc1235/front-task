import styled from "styled-components";
import InputBox from "./InputBox";

const SigninBox = styled.main`
  width: 100svw;
  height: calc(100svh - 200px);
  background-color: lightblue;
`

const Signin = ()=>{
  return(
    <SigninBox>
      서브페이지 인풋
      <InputBox />
    </SigninBox>
  )
}

export default Signin;