import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface propsType{
  type : string;
  placeholder : string;
  onChange: (value: string) => void;
}

const Input = styled.input`
  padding:1em;
  border:1px solid #2e2e2e;
  font-size:1em;
  border-radius:0.5em;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
`

const InputBox:React.FC<propsType> = ({type, placeholder,onChange})=>{
  const HendleChang = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  }
  return(
    <Input type={type} placeholder={placeholder}  onChange={HendleChang} />
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