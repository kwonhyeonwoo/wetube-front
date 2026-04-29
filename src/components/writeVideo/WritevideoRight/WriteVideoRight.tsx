import type {  UseFormSetValue, FieldValues } from "react-hook-form";
import styles from "./css/index.module.css";
import UploadGuideLine from "../UploadGuideLine/UploadGuideLine";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import UploadDropMenu from "@/pages/video/components/UploadDropMenu/UploadDropMenu";
import TagSectionContainer from "@/pages/video/components/TagSection/container/TagSectionContainer";
interface Props <T extends FieldValues>{
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
      <UploadDropMenu currentCategory={currentCategory} setValue={setValue} />
      <TagSectionContainer hashtags={currentTags} setValue={setValue} />
      <UploadGuideLine />
      <SubmitButton text="동영상 업로드" type="submit" />
    </div>
  );
}

export default WriteVideoRight