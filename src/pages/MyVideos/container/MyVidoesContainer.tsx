import MyVideoSearch from "@/components/MyVideoSearch/MyVideoSearch";
import styles from "../css/index.module.css";
import { useCallback} from "react";
import { useForm } from "react-hook-form";
import VideoCard from "@/components/VideoCard/VideoCard";
import type { IVideo } from "@/@types/video.type";

const MyVideosContainer = () => {
    const { register, setValue, watch } = useForm<{
      value: string;
      query: string;
    }>({
      defaultValues: {
        query: "latest",
      },
    });
    const currentQuery = watch("query");
    const handleSortClicked = useCallback(
      (query:string) => {
          setValue('query',query)
      },
      [],
    )
  return (
    <main className={styles.myVideosPage}>
      <MyVideoSearch
        register={register}
        handleSortClicked={handleSortClicked}
        currentQuery={currentQuery}
      />
      <section className={styles.videoSection}>
        {videos.length < 0 ? (
          <div className={styles.undeVideos}>
            <p className={styles.undeVideoText}>검색 된 비디오가 없습니다.</p>
          </div>
        ) : (
           <div className={styles.videoBox}>
              {videos.map((item)=>(
                <VideoCard key={item.id} {...item} handleVideoDetail={()=>{}}/>
              ))}
           </div>

        )}
      </section>
    </main>
  );
}

export default MyVideosContainer;

const videos : IVideo[]= [
  {
    video: "",
    title: "안녕하세요! 저희는 누구일까요?",
    content: "dkssuddkljsflkjsdflkjsfljsflkjsldkfjlsf",
    views: "100",
    category: "영화",
    tags: ["아이돌", "연애", "관심사"],
    nickName: "사악한혀누",
    date: new Date(),
    profile: "",
    id: "vidoes",
  },
  {
    video: "",
    title: "안녕하세요! 저희는 누구일까요?",
    content: "dkssuddkljsflkjsdflkjsfljsflkjsldkfjlsf",
    views: "100",
    category: "영화",
    tags: ["아이돌", "연애", "관심사"],
    nickName: "사악한혀누",
    date: new Date(),
    profile: "",
    id: "vidoes",
  },
  {
    video: "",
    title: "안녕하세요! 저희는 누구일까요?",
    content: "dkssuddkljsflkjsdflkjsfljsflkjsldkfjlsf",
    views: "100",
    category: "영화",
    tags: ["아이돌", "연애", "관심사"],
    nickName: "사악한혀누",
    date: new Date(),
    profile: "",
    id: "vidoes",
  },
  {
    video: "",
    title: "안녕하세요! 저희는 누구일까요?",
    content: "dkssuddkljsflkjsdflkjsfljsflkjsldkfjlsf",
    views: "100",
    category: "영화",
    tags: ["아이돌", "연애", "관심사"],
    nickName: "사악한혀누",
    date: new Date(),
    profile: "",
    id: "vidoes",
  },

];