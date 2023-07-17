import styled from 'styled-components';

interface propsType{
  type : string;
  placeholder : string;
}

const Input = styled.input`
  padding:1em;
  border:1px solid #2e2e2e;
  font-size:1em;
  border-radius:0.5em;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
`

const InputBox = ({type, placeholder}:propsType)=>{
  return(
    <Input type={type} placeholder={placeholder} />
  )
}
// const InputBox = ({propsText}:propsType)=>{
//   const [value, setValue] = useState('');
//   setValue(propsText);
//   return(
//     <Box>
//       <Input/>
//     </Box>
//   )
// }

export default InputBox;