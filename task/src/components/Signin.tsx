import styled from "styled-components";
import InputBox from "./InputBox";

const SigninBox = styled.main`
  display: flex;
  width: 100svw;
  height: calc(100svh - 200px);
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Signin = ()=>{
  return(
    <SigninBox>
      서브페이지 인풋
      <InputBox type='email' placeholder="이메일입력" />
      <InputBox type='password' placeholder="비밀번호" />
    </SigninBox>
  )
}

export default Signin;