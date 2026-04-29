import styles from "./css/index.module.css";
import ProgressBar from "../../../../../components/video/ProgressBar/ProgressBar";
import PlayerIcon from "@/assets/video/play.svg?react";
import PauseIcon from "@/assets/video/pause.svg?react";
import { formatVideoTime } from "@/lib/lib";
import FullScreenIcon from "@/assets/video/full-screen.svg?react"
import VolumeIcon from "@/assets/video/on-volum.svg?react";
import MuteIcon from "@/assets/video/off-volum.svg?react";

interface Props {
  video: string;
  duration: number;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  progressPercent: number;
  currentTime: number;
  isPlaying: boolean;
  isHovering: boolean;
  isMuted: boolean;
  volume: number;
  handleMute: () => void;
  handleFullscreen: () => void;
  handleMouseOver: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMouseOut: () => void;
  handleLoadedMetaData: () => void;
  handleTimeUpdate: () => void;
  handleProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  handlePlayer: () => void;
}
const VideoPlay = ({
  video,
  videoRef,
  duration,
  isPlaying,
  progressPercent,
  currentTime,
  isHovering,
  isMuted,
  volume,
  handleMute,
  handleVolumeChange,
  handleMouseOver,
  handleMouseOut,
  handleProgressClick,
  handleFullscreen,
  handleLoadedMetaData,
  handleTimeUpdate,
  handlePlayer,
}: Props) => {

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles.videoPlayBox}
    >
      <video
        ref={videoRef}
        className={styles.video}
        onLoadedMetadata={handleLoadedMetaData}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={`${import.meta.env.VITE_APP_BASE_SRC}/${video}`} />
      </video>
      <div
        className={`${styles.videoAccessBox} ${isHovering ? styles.show : ""}`}
      >
        <div className={styles.videoAccess}>
          <ProgressBar
            progressPercent={progressPercent}
            handleProgressClick={handleProgressClick}
          />
          <div className={styles.accessBottom}>
            <div className={styles.leftAccess}>
              <button className={styles.playBtn} onClick={handlePlayer}>
                {!isPlaying ? <PauseIcon /> : <PlayerIcon />}
              </button>
              <div className={styles.currentTime}>
                {formatVideoTime(currentTime)} / {formatVideoTime(duration)}
              </div>
            </div>
            <div className={styles.rightAccess}>
              <button onClick={handleFullscreen} className={styles.playBtn}>
                <FullScreenIcon />
              </button>
              <div className={styles.volumeBox}>
                <button className={styles.playBtn} onClick={handleMute}>
                  {isMuted || volume === 0 ? <MuteIcon /> : <VolumeIcon />}
                </button>
                <div className={styles.volumSliderBox}>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01" // 부드럽게 조절되도록 단위를 0.01로 설정
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className={styles.volumeSlider}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;