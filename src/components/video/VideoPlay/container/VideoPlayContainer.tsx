import { useCallback, useEffect, useRef, useState } from 'react';
import VideoPlay from '../VideoPlay'


interface Props{
    video:string;
}
const VideoPlayContainer = ({video}:Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasTriggered3Sec = useRef(false);
    const [currentTime, setCurrentTime] = useState<number >(0);
    const [duration, setDuration] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
    const handlePlayer = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    };

    const handleTimeUpdate = useCallback(() => {
      if (videoRef.current) {
        const time = videoRef.current.currentTime;
        setCurrentTime(time);
      }
    }, []);
    const handleLoadedMetaData = useCallback(
      () => {
        if(videoRef.current){
            const totalTime = videoRef.current.duration;
            setDuration(totalTime)
        }
      },
      [],
    )

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const progressBar = e.currentTarget;
        const clickPosition = e.nativeEvent.offsetX; 
        const totalWidth = progressBar.clientWidth;
        const newTime = (clickPosition / totalWidth) * duration;

        if (videoRef.current) {
            videoRef.current.currentTime = newTime; // 비디오 시간 실제 변경
            setCurrentTime(newTime); // state도 바로 업데이트
        }
    };
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const handleFullscreen = () => {
        if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
        }
    };
    const handleMute = () => {
        if (videoRef.current) {
        const newMuted = !isMuted;
        setIsMuted(newMuted);
        videoRef.current.muted = newMuted;

        // 만약 볼륨이 0인 상태에서 음소거를 풀면 볼륨을 살짝 올려주는 디테일
        if (!newMuted && volume === 0) {
            setVolume(0.5);
            videoRef.current.volume = 0.5;
        }
        }
    };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);

    if (videoRef.current) {
        videoRef.current.volume = newVolume;
        setVolume(newVolume);

      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
    } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
    }
    }
  };
    useEffect(() => {
      if (Math.floor(currentTime) === 3 && !hasTriggered3Sec.current) {
        console.log("헬로우 !");
        hasTriggered3Sec.current = true; // 한 번 실행했으니 깃발을 올려줍니다.
    }
      if (Math.floor(currentTime) < 3) {
        hasTriggered3Sec.current = false;
    }
    }, [currentTime]);
  return (
    <VideoPlay
      video={video}
      videoRef={videoRef}
      duration={duration}
      isPlaying={isPlaying}
      currentTime={currentTime}
      progressPercent={progressPercent}
      isMuted={isMuted}
      isHovering={isHovering}
      volume={volume}
      handleVolumeChange={handleVolumeChange}
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      handleFullscreen={handleFullscreen}
      handleMute={handleMute}
      handleProgressClick={handleProgressClick}
      handleLoadedMetaData={handleLoadedMetaData}
      handleTimeUpdate={handleTimeUpdate}
      handlePlayer={handlePlayer}
    />
  );
}

export default VideoPlayContainer