import styles from "./css/index.module.css";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props <T extends FieldValues>{
    placeholder:string;
    text:string;
    name:Path<T>;
    register:UseFormRegister<T>;
}

const ContentTextArea = <T extends FieldValues>({name,placeholder,text,register}:Props<T>) => {
  return (
    <div className={styles.textAreaBox}>
        <span className={styles.textAreaText}>{text}</span>
        <textarea 
            placeholder={placeholder}
            className={styles.textArea}
            {...register(name)}
        />
    </div>
  )
}

export default ContentTextArea