import styles from "../css/index.module.css";
import { useLocation, useParams } from "react-router-dom";
import StorageOverView from "@/components/storageDetail/StorageOverView/StorageOverView";
import StorageList from "@/components/storageDetail/StorageList/StorageList";
import type { IVideo } from "@/@types/video.type";

const StorageDetailContainer = () => {
  // const {usreId,storageId} = useParams();
  const {state:{
    title,
    content,
    count,
    date
  }} = useLocation();
  return (
    <main className={styles.storageDetailPage}>
      <StorageOverView
        title={title}
        count={count}
        content={content}
        date={date}
      />
      <section className={styles.storageListsSection}>
        <div className={styles.storageLists}>
          {lists.map((item,idx)=>(
            <StorageList item={item} number={idx+1} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default StorageDetailContainer;

const lists : IVideo[]= [
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },
  {
    video:"",
    title:"생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName:"사악한혀누",
    views:"12",
    date:new Date(),
    id:"1234",
    content:"안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile:"",
    tags:["안녕","이직","코딩","리액트","js"],
    category:"movie"
  },

]