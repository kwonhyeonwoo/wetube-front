import type { SvgIcon } from "@/interfaces/common.type";import styles from "./css/index.module.css";
interface Props{
    Icon:SvgIcon;
    text:string;
    isActive?:boolean;
    handleActive:()=>void;
}
const ActionButton = ({Icon,text,isActive,handleActive}:Props) => {
  console.log('isActive',isActive)
  return (
    <div className={styles.actionBtnBox}>
      <button className={styles.actionBtn} onClick={handleActive}>
        <Icon color={isActive ? "var(--color-primary)" : ""} />
        <span className={styles.btnText}>{text}</span>
      </button>
    </div>
  );
}

export default ActionButton