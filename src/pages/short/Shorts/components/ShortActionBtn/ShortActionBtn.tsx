import type { ElementType } from "react";
import styles from "./css/index.module.css";

interface Props{
    icon: ElementType |  string;
    text:string;
}

const ShortActionBtn = () => {
  return (
    <div className={styles.shortActionBtn}>ShortActionBtn</div>
  )
}

export default ShortActionBtn