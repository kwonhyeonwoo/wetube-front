import "./css/index.css";

interface Props{
    title:string;
    views:string;
    shortId:string;
}

const Short = ({title,views,shortId}:Props) => {
  return (
    <div className="short-video-card">
      <div className="short-video-card-video" />
      <div className="short-video-card-text">
        <p className="short-video-card-text-title">{title}</p>
        <p className="short-video-card-text-views">조회수 {views}회</p>
      </div>
    </div>
  );
}

export default Short