import type { UseFormSetValue } from "react-hook-form";
import styles from "./css/index.module.css";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
interface Props{
    currentCategory:string;
    setValue:UseFormSetValue<WriteVideoFormType>;
}
const UploadDropMenu = ({currentCategory,setValue}:Props) => {
  return (
    <div className={styles.uploadDropMenu}>
        <button>{currentCategory}</button>
        
    </div>
  )
}

export default UploadDropMenu