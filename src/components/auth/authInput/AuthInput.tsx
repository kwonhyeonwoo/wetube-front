import type { UseFormRegister, FieldValues,Path } from "react-hook-form";import styles from  "./css/index.module.css";
interface Props<T extends FieldValues>{
    type:string;
    name:Path<T>;
    label:string;
    placeholder:string;
    register:UseFormRegister<T>
}
const AuthInput = <T extends FieldValues>({
    type,
    name,
    label,
    placeholder,
    register
}:Props<T>) => {
  return (
    <div className={styles.authInputWrapper}>
        <span className={styles.label}>{label}</span>
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            {...register(name)}
        />
    </div>
  )
}

export default AuthInput