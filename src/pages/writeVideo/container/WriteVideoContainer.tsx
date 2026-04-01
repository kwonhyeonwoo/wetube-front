import styles from "../css/index.module.css";
import { useForm } from "react-hook-form"
import { writeVideoSchema, type WriteVideoFormType } from "@/schema/writeVideo.schema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback } from "react";
import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";

const WriteVideoContainer = () => {
const {
      register,
      handleSubmit,
      watch,
      setValue,
      control,
      formState:{errors}} = useForm<WriteVideoFormType>({
        resolver:zodResolver(writeVideoSchema),
        defaultValues:{
          categories:"movie",
          tags:[]
        }
      });
    
      const onSubmit = useCallback(
        (data:WriteVideoFormType) => {
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