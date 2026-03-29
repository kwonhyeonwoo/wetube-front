import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styles from "./css/index.module.css";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
import UploadDropMenu from "../UploadDropMenu/UploadDropMenu";
interface Props{
    currentCategory:string;
    setValue:UseFormSetValue<WriteVideoFormType>;
    register:UseFormRegister<WriteVideoFormType>
}
const WriteVideoRight = ({currentCategory,register,setValue}:Props) => {
  return (
    <div className={styles.rightUpload}>
        <UploadDropMenu currentCategory={currentCategory} setValue={setValue}/>
    </div>
  )
}

export default WriteVideoRight