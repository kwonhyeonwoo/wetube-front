import type { SvgIcon } from "@/interfaces/common.type";import styles from "./css/index.module.css";
interface Props{
    Icon:SvgIcon;
    text:string;
    handleActive:()=>void;
}
const ActionButton = ({Icon,text,handleActive}:Props) => {
  return (
    <div className={styles.actionBtnBox}>
        <button className={styles.actionBtn} onClick={handleActive}>
            <Icon/>
            <span className={styles.btnText}>{text}</span>
        </button>
    </div>
  )
}

export default ActionButton