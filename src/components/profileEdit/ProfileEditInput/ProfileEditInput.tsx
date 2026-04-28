import type { Path, UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";
import type { UserEditType } from "@/schema/auth.schema";

interface Props{
    label:string;
    type:string;
    placeholder:string;
    value:string;
    name:Path<UserEditType>;
    textArea?:boolean;
    register:UseFormRegister<UserEditType>;
}

const ProfileEditInput = ({
    label,
    type,
    placeholder,
    register,
    value,
    name,
    textArea,
}:Props) => {
  return (
    <div className={styles.profileEditInputBox}>
      <label className={styles.label}>{label}</label>
      {textArea ? (
        <textarea 
          placeholder="간단한 소개문을 입력하여 주십시오!"  
          {...register(name)}
          className={styles.textarea}
        />
      ) : (
        <input
          className={styles.input}
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
    </div>
  );
}

export default ProfileEditInput