import styles from "./css/index.module.css";

interface Props{
    text:string;
    handleSubmit:()=>void;
}
const SubmitButton = ({text,handleSubmit}:Props) => {
  return (
    <button className={styles.submitButton} onClick={handleSubmit}>{text}</button>
  )
}

export default SubmitButton