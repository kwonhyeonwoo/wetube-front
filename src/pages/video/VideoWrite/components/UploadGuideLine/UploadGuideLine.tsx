import styles from "./css/index.module.css";
import checkBox from "@/assets/common/check-box.svg";
const UploadGuideLine = () => {
  const lists = [
    {
      text: "4K 해상도 지원",
    },
    {
      text: "HDR 컬러 프로필 유지",
    },
  ];
  return (
    <div className={styles.guideLine}>
      <p className={styles.guideLineTitle}>업로드 가이드라인</p>
      <p
        className={styles.guideContent}
      >{`저작권을 존중하고 커뮤니티 가이드라인을 준수해 주세요. 
훌륭한 콘텐츠는 정직함에서 시작됩니다.`}</p>
      <div className={styles.texts}>
        {lists.map((item, idx) => (
          <p className={styles.text} key={idx}>
            <img src={checkBox} alt="check-box" />
            <span>{item.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default UploadGuideLine;
