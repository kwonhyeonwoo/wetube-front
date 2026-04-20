import styles from "./css/index.module.css"
interface Props {
  progressPercent:number;
  handleProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const ProgressBar = ({progressPercent,handleProgressClick}:Props) => {
  return (
    <div
      onClick={handleProgressClick}
      className={styles.progressBar}
    >
      {/* 실제 차오르는 막대 */}
      <div
        className={styles.progressPercent}
        style={{
          width: `${progressPercent}%`, // 계산된 퍼센트만큼 너비 부여!
          
        }}
      />
    </div>
  );
}

export default ProgressBar