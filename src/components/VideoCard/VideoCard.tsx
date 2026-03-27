import "./css/index.css";

interface Props {
  video: string;
  videoId: string;
  profile?: string;
  content: string;
  title: string;
  nickName: string;
  views: string;
  timeAgo: string; // ~~몇시간,몇분전,
  handleVideoDetail:(id:string)=>void;
}

const VideoCard = ({
    video,
    videoId,
    profile,
    content,
    title,
    nickName,
    views,
    timeAgo
}:Props) => {
  return (
    <div className="video-card-wrapper">
      {/* <video /> */}
      <div className="test-video" />
      <div className="video-card-wrapper-info">
        <img
          src={profile}
          alt="user-profile"
          className="video-card-wrapper-info-profile"
        />
        <div className="video-card-wrapper-info-content">
          <p className="video-card-wrapper-info-content-text">{title}</p>
          <div className="video-card-wrapper-info-content-author">
            <p className="video-card-wrapper-info-author-text">{nickName}</p>
            <p className="video-card-wrapper-info-author-text">
              조회수: {views}회 • 2일 전
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard