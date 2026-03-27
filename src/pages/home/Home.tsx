import "./css/index.css";
import type { IShort, IVideo } from "video";
import CategoriesContainer from "../../components/common/Categories/container/CategoriesContainer";
import VideoCard from "../../components/VideoCard/VideoCard";
import Short from "../../components/Short/Short";

interface Props {
  videos: IVideo[];
  shorts:IShort[];
  handleVideoDetail:(id:string)=>void;
}

const Home = ({ videos, shorts,handleVideoDetail }: Props) => {
  return (
    <main className="home-page">
      <CategoriesContainer />
      <section className="home-page-videos-section">
        {videos.map((item, idx) => (
          <VideoCard
            key={idx}
            video={item.video}
            videoId={item.id}
            profile={item.profile}
            content={item.content}
            title={item.title}
            nickName={item.nickName}
            views={item.views}
            timeAgo={String(item.date)}
            handleVideoDetail={handleVideoDetail}
          />
        ))}
      </section>
      <section className="home-page-short-shorts-section">
        {shorts.map((item,idx)=>(
          <Short title={item.title} views={item.views} shortId={item.shortId}/>
        ))}
      </section>
    </main>
  );
};

export default Home;
