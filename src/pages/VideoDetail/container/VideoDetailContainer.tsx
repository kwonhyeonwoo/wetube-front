import styles from "../css/index.module.css";
import VideoPrimaryInfo from "@/components/video/VideoPrimaryInfo/VideoPrimaryInfo";
import { useParams } from "react-router-dom";
import VideoComment from "@/pages/VideoComment/VideoComment";
import type { CommentRequest, IComment } from "@/interfaces/comment.type";
import CommentCount from "@/components/video/CommentCount/CommentCount";
import { useForm } from "react-hook-form";
import CommentInput from "@/components/video/CommentInput/CommentInput";
import CategoriesContainer from "@/components/common/Categories/container/CategoriesContainer";
import StorageList from "@/components/video/StorageList/StorageList";
import type { IVideo } from "@/@types/video.type";
import { useGetVideo } from "@/hooks/queries/video/useGetVideo";

const VideoDetailContainer = () => {
  const {id} = useParams();
  const {data:video} = useGetVideo(id ?? "");
  const { register } = useForm<CommentRequest>();
  return (
    <main className={styles.videoDetailPage}>
      <section className={styles.videoSection}>
        {video && <VideoPrimaryInfo video={video}/>}
        <CommentCount length="9" />
        <CommentInput register={register} />
        <div className={styles.comments}>
          {comments.map((item) => (
            <VideoComment {...item} commentCount={String(comments.length)} />
          ))}
        </div>
      </section>
      <section className={styles.videoListSection}>
        <div className={styles.cateBox}>
          <CategoriesContainer />
        </div>
        <div className={styles.cateLists}>
          {lists.map((item, idx) => (
            <StorageList item={item} number={idx + 1} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default VideoDetailContainer;

const comments: IComment[] = [
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
  {
    comment: "너무 이뻐요 이거 어뜩해요?",
    nickName: "사악한혀누",
    date: "1개월 전",
    cmtId: "jsdkljfksjkfl",
    authorId: "sdjflksj12345",
  },
];
const lists: IVideo[] = [
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
  {
    video: "",
    title: "생산성을 높이는 일 할 때 듣기 좋은 노래,아무나 한번 들어봐",
    nickName: "사악한혀누",
    views: "12",
    date: new Date(),
    id: "1234",
    content:
      "안녕하십니까 콘텐트 입니다 하 진짜 존나 귀찮은데 이걸 어떻게하면 좋을지 하나하나 다 적어야하나 진짜 미쳐버리겠다 그냥 빨리 퍼블리싱 끝내버리자.",
    profile: "",
    tags: ["안녕", "이직", "코딩", "리액트", "js"],
    category: "movie",
  },
];
