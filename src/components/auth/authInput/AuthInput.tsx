import styles from  "./css/index.module.css";
interface Props{
    type:string;
    name:string;
    value:string;
    label:string;
    placeholder:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const AuthInput = ({
    type,
    name,
    value,
    label,
    placeholder,
    handleChange,
}:Props) => {
  return (
    <div className={styles.authInputWrapper}>
        <span className={styles.label}>{label}</span>
        <input
            className={styles.input}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
  )
}

export default AuthInput