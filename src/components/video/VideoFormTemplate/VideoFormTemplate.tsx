import styles from "./css/index.module.css";
import type {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type { videoType } from "@/schema/video.schema";
import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";
import type { CategoryType } from "@/interfaces/video.type";
import WriteCategory from "../WriteCategory/WriteCategory";
interface Props {
  currentTags: string[];
  videoPreview: string | null;
  currentCategory: CategoryType;
  register: UseFormRegister<videoType>;
  setValue: UseFormSetValue<videoType>;
  onInvalid?: () => void;
  onSubmit: (data: videoType) => void;
  handleSubmit: UseFormHandleSubmit<videoType>;
}

const VideoFormTemplate = ({
  currentTags,
  videoPreview,
  currentCategory,
  register,
  setValue,
  onInvalid,
  onSubmit,
  handleSubmit,
}: Props) => {
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
