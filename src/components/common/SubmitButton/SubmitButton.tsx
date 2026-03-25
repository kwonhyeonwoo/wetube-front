import "./css/index.css";

interface Props{
    text:string;
    handleSubmit:()=>void;
}
const SubmitButton = ({text,handleSubmit}:Props) => {
  return (
    <button className="submit-button" onClick={handleSubmit}>{text}</button>
  )
}

export default SubmitButton