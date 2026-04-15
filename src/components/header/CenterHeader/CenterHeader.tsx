import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";

interface Props{
    onSubmit: SubmitHandler<{keyword:string}>
    register:UseFormRegister<{keyword:string}>;
    handleSubmit:UseFormHandleSubmit<{keyword:string}>;
}
const CenterHeader = ({ register, handleSubmit, onSubmit }: Props) => {
  return (
    <form className={styles.centerHeaderForm} onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text" 
        className={styles.input}
        placeholder="검색어를 입력하세요"
        {...register('keyword')}
      />
      <button className={styles.centerHeaderGlass} type="submit">
        <img 
          src="/assets/header/glass.png"
          srcSet="
            /assets/header/glass@2x.png 2x,
            /assets/header/glass@3x.png 3x,
          "
          alt="" 
        />
      </button>
    </form>
  )
}

export default CenterHeader