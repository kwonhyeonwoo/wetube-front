import styles from "./css/index.module.css";
interface Props {
  handleMediaAction: (videoId: string) => void;
}
const BestMedia = ({ handleMediaAction }: Props) => {
  return (
    <div className={styles.bestMedia} onClick={() => handleMediaAction("")}>
      <div className={styles.bestMediaCard}>
        <div className={styles.media}>
          {/* <video/> */}
          <div
            style={{
              width: "424px",
              height: "228px",
              backgroundColor: "black",
              borderRadius: "16px",
            }}
          />
        </div>
        <div className={styles.videoInfoBox}>
          <p className={styles.mediaTitle}>
            PlayList 느좋이 되... 인스타 국내 감성힙합 플리
          </p>
          <div className={styles.metaBox}>
            <p className={styles.metaText}>조회수 646,666회</p>
            <p className={styles.metaText}>1일 전</p>
          </div>
          <p className={styles.videoContent}>
            {`UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            
            UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            
            UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]UYong Wave 
            [지친 하루, 유영하는 플레이리스트 채널]
            `}
          </p>
          <p className={styles.text}>자세히 알아보기</p>
        </div>
      </div>
    </div>
  );
};

export default BestMedia;
