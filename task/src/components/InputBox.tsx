
import { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  width:100%;
  height:100%;
  justify-content: center;
  align-items: center;
`
const Input = styled.input.attrs({
  type:'text',
})`
  padding:1em;
  border:1px solid #2e2e2e;
  font-size:1em;
  border-radius:0.5em;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
`

const InputBox = ()=>{
  const [value, setValue] = useState('')
  return(
    <Box>
      <Input />
    </Box>
  )
}

export default InputBox;