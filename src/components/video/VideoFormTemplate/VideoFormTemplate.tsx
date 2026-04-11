import styles from "./css/index.module.css";
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";
import WriteCategory from "../WriteCategory/WriteCategory";
import type { CategoryType } from "@/interfaces/media.type";

interface Props <T extends FieldValues>{
  currentTags: string[];
  videoPreview: string | null;
  currentCategory: CategoryType;
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  onInvalid?: SubmitErrorHandler<T>;
  onSubmit: SubmitHandler<T>
  handleSubmit: UseFormHandleSubmit<T>;
}

const VideoFormTemplate =<T extends FieldValues> ({
  currentTags,
  videoPreview,
  currentCategory,
  register,
  setValue,
  onInvalid,
  onSubmit,
  handleSubmit,
}: Props<T>) => {
  return (
    <main className={styles.videoWriteTemplate}>
      <section className={styles.titleSection}>
        <WriteCategory/>
        <h2 className={styles.title}>동영상 업로드</h2>
        <p
          className={styles.subText}
        >{`최고의 해상도로 당신의 창의적인 비전을 전 세계와 공유하세요. 정밀하게 큐레이팅
된 환경에서 콘텐츠가 빝을 발합니다.`}</p>
      </section>

      <section className={styles.uploadSection}>
        <form
          className={styles.uploadForm}
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <WriteVideoLeft videoPreview={videoPreview} register={register} />
          <WriteVideoRight
            setValue={setValue}
            currentTags={currentTags}
            currentCategory={currentCategory}
          />
        </form>
      </section>
    </main>
  );
};

export default VideoFormTemplate;
