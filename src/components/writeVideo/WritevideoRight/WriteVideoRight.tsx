import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styles from "./css/index.module.css";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
import UploadDropMenuContainer from "../UploadDropMenu/container/UploadDropMenuContainer";
interface Props{
    currentCategory:string;
    setValue:UseFormSetValue<WriteVideoFormType>;
    register:UseFormRegister<WriteVideoFormType>
}
const WriteVideoRight = ({currentCategory,register,setValue}:Props) => {
  return (
    <div className={styles.rightUpload}>
        <UploadDropMenuContainer currentCategory={currentCategory} setValue={setValue}/>
    </div>
  )
}

export default WriteVideoRight