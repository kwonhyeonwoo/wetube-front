import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styles from "./css/index.module.css";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
import UploadDropMenuContainer from "../UploadDropMenu/container/UploadDropMenuContainer";
import TagSection from "../TagSection/TagSection";
import UploadGuideLine from "../UploadGuideLine/UploadGuideLine";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
interface Props{
    currentCategory:string;
    currentTags:string[];
    setValue:UseFormSetValue<WriteVideoFormType>;
    register:UseFormRegister<WriteVideoFormType>
}
const WriteVideoRight = ({currentCategory,currentTags,register,setValue}:Props) => {
  return (
    <div className={styles.rightUpload}>
        <UploadDropMenuContainer currentCategory={currentCategory} setValue={setValue}/>
        <TagSection tags={currentTags}setValue={setValue}/>
        <UploadGuideLine/>
        <SubmitButton text="동영상 게시하기" handleSubmit={()=>{}}/>
    </div>
  )
}

export default WriteVideoRight