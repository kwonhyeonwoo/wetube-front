import styles from "./css/index.module.css";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props <T extends FieldValues>{
    text:string;
    value?:string;
    name:Path<T>;
    register:UseFormRegister<T>;
}

const ContentTextArea = <T extends FieldValues>({
  name,
  text,
  value,
  register}:Props<T>) => {
  return (
    <div className={styles.textAreaBox}>
      <span className={styles.textAreaText}>{text}</span>
      <textarea
        value={value}
        placeholder="시청자에게 동영상에 대해 알려주세요"
        className={styles.textArea}
        {...register(name)}
      />
    </div>
  );
}

export default ContentTextArea