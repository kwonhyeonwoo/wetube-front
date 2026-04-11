import type {  UseFormSetValue, FieldValues } from "react-hook-form";
import styles from "./css/index.module.css";
import UploadDropMenu from "../UploadDropMenu/UploadDropMenu";
import TagSection from "../TagSection/TagSection";
import UploadGuideLine from "../UploadGuideLine/UploadGuideLine";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
interface Props<T extends FieldValues>{
    currentTags:string[];
    currentCategory:string;
    setValue:UseFormSetValue<T>;
}
const WriteVideoRight = <T extends FieldValues>({
  currentTags,
  currentCategory,
  setValue
}:Props<T>) => {
  return (
    <div className={styles.rightUpload}>
        <UploadDropMenu 
          currentCategory={currentCategory} 
          setValue={setValue}
        />
        <TagSection tags={currentTags} setValue={setValue}/>
        <UploadGuideLine/>
        <SubmitButton text="동영상 업로드"type="submit"/>
    </div>
  )
}

export default WriteVideoRight