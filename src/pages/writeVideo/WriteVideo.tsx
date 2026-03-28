import WriteVideoLeft from "@/components/writeVideo/WriteVideoLeft/WriteVideoLeft";
import styles from "./css/index.module.css";
import WriteVideoRight from "@/components/writeVideo/WritevideoRight/WriteVideoRight";

const WriteVideo = () => {
  return (
    <main className={styles.videoWritePage}>
      <section className={styles.titleSection}>
        <h2 className={styles.title}>동영상 업로드</h2>
        <p className={styles.subText}>{`최고의 해상도로 당신의 창의적인 비전을 전 세계와 공유하세요. 정밀하게 큐레이팅
된 환경에서 콘텐츠가 빝을 발합니다.`}</p>
      </section>

      <section className={styles.uploadSection}>
          <WriteVideoLeft />
          <WriteVideoRight />
      </section>
    </main>
  )
}

export default WriteVideo