import { HISTORY_TABS } from "@/constants/historyConstants";
import styles from "../css/index.module.css";
import { useState } from "react";
import type { VideoResponse } from "@/interfaces/video.type";
import HistoryVideoCard from "@/components/HistoryVideoCard/HistoryVideoCard";

const VideoHistoryContainer = () => {
    const [tab, setTab] = useState<string>("history");
    const handleTabClicked = (key:string)=>{
        setTab(key);
    }
  return (
    <main className={styles.videoHistoryPage}>
      <section className={styles.tabsSection}>
        <h2 className={styles.title}>기록</h2>
        <div className={styles.tabBox}>
          {HISTORY_TABS.map(({ text, key }, idx) => (
            <button
              key={idx}
              className={`${styles.tabBtn} ${tab === key && styles.activeTabBtn}`}
              onClick={() => handleTabClicked(key)}
            >
              {text}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.vidoes}>
          {historyVideos.map((item,idx)=>(
            <HistoryVideoCard {...item }key={item.id}/>
          ))}
      </section>
    </main>
  );
}

export default VideoHistoryContainer;

const historyVideos: VideoResponse[] = [
  {
    video: "",
    title:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    content:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    views: "100",
    category: "movie",
    tags: ["운동", "코딩", "개귀찮"],
    nickName: "사악한혀누",
    date: new Date(),
    id: "hello",
  },
  {
    video: "",
    title:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    content:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    views: "100",
    category: "movie",
    tags: ["운동", "코딩", "개귀찮"],
    nickName: "사악한혀누",
    date: new Date(),
    id: "hello",
  },
  {
    video: "",
    title:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    content:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    views: "100",
    category: "movie",
    tags: ["운동", "코딩", "개귀찮"],
    nickName: "사악한혀누",
    date: new Date(),
    id: "hello",
  },
  {
    video: "",
    title:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    content:
      "안녕하세요! 비디오를 테스트 해볼려고하지만요,,,히히히히히 하 진짜 존나 귀찮은데 이거 어떻게하면 좋을까 ㅗ앨케 하기가 존나나나나나난 귀찮을까",
    views: "100",
    category: "movie",
    tags: ["운동", "코딩", "개귀찮"],
    nickName: "사악한혀누",
    date: new Date(),
    id: "hello",
  },

];