import styles from "./css/index.module.css";

interface Props{
    label:string;
    type:string;
    placeholder:string;
    value:string;
    textArea?:boolean;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}

const ProfileEditInput = ({
    label,
    type,
    placeholder,
    value,
    textArea,
    handleChange
}:Props) => {
  return (
    <div className={styles.profileEditInputBox}>
      <label className={styles.label}>{label}</label>
      {textArea ? (
        <textarea placeholder="간단한 소개문을 입력하여 주십시오!"  className={styles.textarea}/>
      ) : (
        <input
          className={styles.input}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default ProfileEditInput