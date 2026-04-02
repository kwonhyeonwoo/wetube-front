import styles from "../css/index.module.css";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback } from "react";
import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";
import { videoSchema, type videoType } from "@/schema/video.schema";

const WriteVideoContainer = () => {
const {
      register,
      handleSubmit,
      watch,
      setValue,
      } = useForm<videoType>({
        resolver:zodResolver(videoSchema),
        defaultValues:{
          categories:"movie",
          tags:[]
        }
      });
    
      const onSubmit = useCallback(
        (data:videoType) => {
          console.log(data);
        },
        [],
      );
  const currentCategory = watch('categories');
  const currentTags = watch('tags');
  return (
    <main className={styles.videoWritePage}>
    <section className={styles.titleSection}>
      <h2 className={styles.title}>동영상 업로드</h2>
      <p
        className={styles.subText}
      >{`최고의 해상도로 당신의 창의적인 비전을 전 세계와 공유하세요. 정밀하게 큐레이팅
된 환경에서 콘텐츠가 빝을 발합니다.`}</p>
    </section>

    <section className={styles.uploadSection}>
      <form className={styles.uploadForm} onSubmit={handleSubmit(onSubmit)}>
        <WriteVideoLeft register={register} />
        <WriteVideoRight
          register={register}
          setValue={setValue}
          currentTags={currentTags}
          currentCategory={currentCategory}
        />
      </form>
    </section>
  </main>
  )
}

export default WriteVideoContainer