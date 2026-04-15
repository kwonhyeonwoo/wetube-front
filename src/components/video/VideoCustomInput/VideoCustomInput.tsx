import type { UseFormRegister, FieldValues, Path } from "react-hook-form";import styles from "./css/index.module.css";

interface Props<T extends FieldValues>{
    name:string;
    label:string;
    value?:string;
    register:UseFormRegister<T>
}
const VideoCustomInput = <T extends FieldValues>
    ({name,label,value,register}:Props<T>)=> {
  return (
    <div className={styles.titleInputBox}>
        <span className={styles.inputSpan}>{label}</span>
        <input
          type="text"
          placeholder={value ? value : "시선을 사로잡는 제목을 입력하세요"}
          className={styles.input}
          {...register(name as Path<T>)}
        />
      </div>
  )
}

export default VideoCustomInput