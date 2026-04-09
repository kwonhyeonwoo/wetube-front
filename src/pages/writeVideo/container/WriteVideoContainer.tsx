import styles from "../css/index.module.css";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback, useEffect, useState } from "react";
import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";
import { videoSchema, type videoType } from "@/schema/video.schema";
import { useToastStore } from "@/store/useToastStore";
import useVideoMutation from "@/hooks/queries/video/useVideoMutation";

const WriteVideoContainer = () => {
  const {mutate} =useVideoMutation();
    const { addToast } = useToastStore();
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
      const [videoPreview, setVideoPreview] = useState<string | null>(null);
      const onSubmit = useCallback(
        (data: videoType) => {
          mutate({
            video: data.video,
            title: data.title,
            content: data.content,
            category: data.categories,
            tags: data.tags,
          });
        },
        [mutate],
      );

      const onInvalid = ()=>{
        addToast('내용을 전부 채워주세요.')
      }
      const videoFiles = watch('video');
      const currentCategory = watch('categories');
      const currentTags = watch('tags');
      useEffect(() => {
        if (videoFiles && videoFiles.length > 0) {
          const file = videoFiles[0];
          // 기존미리보기가 있으면 해제
          if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
          }
          const previewUrl = URL.createObjectURL(file);
          setVideoPreview(previewUrl);
        }
      }, [videoFiles]);
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
}

export default WriteVideoContainer