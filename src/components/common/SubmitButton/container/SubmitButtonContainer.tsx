import SubmitButton from "../SubmitButton"

interface Props{
    text:string;
    handleSubmit:()=>void;
}

const SubmitButtonContainer = ({text,handleSubmit}:Props) => {
  return (
    <SubmitButton text={text} handleSubmit={handleSubmit}/>
  )
}

export default SubmitButtonContainer