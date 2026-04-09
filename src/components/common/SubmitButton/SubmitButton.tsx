import styles from "./css/index.module.css";

interface Props{
    text:string;
    type:"button" | "submit"
    handleSubmit?:()=>void;
}
const SubmitButton = ({text,type,handleSubmit}:Props) => {
  return (
    <button type={type} className={styles.submitButton} onClick={handleSubmit}>{text}</button>
  )
}

export default SubmitButton