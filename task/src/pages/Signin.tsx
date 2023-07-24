import styled from "styled-components";
import InputBox from "../components/InputBox";
import loginRequest from "../api/index";
import { useState } from "react";


const SigninBox = styled.main`
  display: flex;
  width: 100svw;
  height: calc(100svh - 200px);
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const LoginBtn = styled.button`
  width:200px;
  padding:16px;
  border-radius: 0.5em;
  &:active{
    color: tomato;
  }
`




const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
    console.log(email)
  }
  const onChangePassword = (value: string) => {
    setPassword(value);
    console.log(password)
  };
  return (
    <SigninBox>
      서브페이지 인풋
      <InputBox
        type='email'
        placeholder="이메일입력"
        onChange={onChangeEmail}
      />
      <InputBox type='password' placeholder="비밀번호" onChange={onChangePassword}/>
      <LoginBtn type='button' onClick={loginRequest}>로그인</LoginBtn>
    </SigninBox>
  )
}

export default Signin;