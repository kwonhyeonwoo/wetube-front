import type { UseFormRegister, UseFormSetValue } from "react-hook-form";
import styles from "./css/index.module.css";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
import UploadDropMenu from "../UploadDropMenu/UploadDropMenu";
import TagSection from "../TagSection/TagSection";
import UploadGuideLine from "../UploadGuideLine/UploadGuideLine";
import SubmitButtonContainer from "@/components/common/SubmitButton/container/SubmitButtonContainer";
interface Props{
    currentTags:string[];
    currentCategory:string;
    setValue:UseFormSetValue<WriteVideoFormType>;
    register:UseFormRegister<WriteVideoFormType>
}
const WriteVideoRight = ({
  currentTags,
  currentCategory,
  register,
  setValue
}:Props) => {
  return (
    <div className={styles.rightUpload}>
        <UploadDropMenu 
          currentCategory={currentCategory} 
          setValue={setValue}
        />
        <TagSection tags={currentTags} setValue={setValue}/>
        <UploadGuideLine/>
        <SubmitButtonContainer text="동영상 업로드" handleSubmit={()=>{}}/>
    </div>
  )
}

export default WriteVideoRight