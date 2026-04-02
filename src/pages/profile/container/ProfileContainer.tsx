import ProfileSection from "@/components/profile/ProfileSection/ProfileSection";
import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import type { IVideo } from "@/@types/video.type";
import VideosSection from "@/components/profile/VideosSection/VideosSection";

const ProfileContainer = () => {
  const {id} = useParams();
  // const {data} = useGetVideo(id ?? "");
  const handleVideoDetail = (id:string)=>{}
  return (
    <main className={styles.profilePage}>
      <ProfileSection/>
      <VideosSection
        text="내 동영상"
        videos={data}
        handleVideoDetail={()=>{}}
      />
      <VideosSection
        text="좋아요 표시한 동영상"
        videos={data}
        handleVideoDetail={()=>{}}
      />
    </main>
  )
}

export default ProfileContainer;

const data:IVideo[]= [
  {
    video: "1",
    title: "이란!이스라엘 핵 전쟁까지 번지는가? 과연 미국은 이스라엘에 지원을...해줄것인가...이스라엘의 운명은?",
    content: "핵전쟁 가즈아!!!! 힝 구 리 퐁 퐁 여긴느 ㅌ콘텐트야!",
    views: "1",
    category: "1",
    tags: ["안녕"],
    nickName: "1",
    date: new Date(),
    profile: "",
    id: "4321",
  },
  {
    video: "1",
    title: "이란!이스라엘 핵 전쟁까지 번지는가? 과연 미국은 이스라엘에 지원을...해줄것인가...이스라엘의 운명은?",
    content: "핵전쟁 가즈아!!!! 힝 구 리 퐁 퐁 여긴느 ㅌ콘텐트야!",
    views: "1",
    category: "1",
    tags: ["안녕"],
    nickName: "1",
    date: new Date(),
    profile: "",
    id: "4321",
  },
  {
    video: "1",
    title: "이란!이스라엘 핵 전쟁까지 번지는가? 과연 미국은 이스라엘에 지원을...해줄것인가...이스라엘의 운명은?",
    content: "핵전쟁 가즈아!!!! 힝 구 리 퐁 퐁 여긴느 ㅌ콘텐트야!",
    views: "1",
    category: "1",
    tags: ["안녕"],
    nickName: "1",
    date: new Date(),
    profile: "",
    id: "4321",
  },
  {
    video: "1",
    title: "이란!이스라엘 핵 전쟁까지 번지는가? 과연 미국은 이스라엘에 지원을...해줄것인가...이스라엘의 운명은?",
    content: "핵전쟁 가즈아!!!! 힝 구 리 퐁 퐁 여긴느 ㅌ콘텐트야!",
    views: "1",
    category: "1",
    tags: ["안녕"],
    nickName: "1",
    date: new Date(),
    profile: "",
    id: "4321",
  }
]