import styles from "../css/index.module.css";
import VideoPrimaryInfo from "@/components/video/VideoPrimaryInfo/VideoPrimaryInfo";
import { useNavigate,
useParams } from "react-router-dom";
import VideoComment from "@/pages/VideoComment/VideoComment";
import type { CommentRequest, IComment } from "@/interfaces/comment.type";
import CommentCount from "@/components/video/CommentCount/CommentCount";
import { useForm } from "react-hook-form";
import CommentInput from "@/components/video/CommentInput/CommentInput";
import { useGetVideo } from "@/hooks/queries/video/useGetVideo";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import StorageList from "@/components/video/StorageList/StorageList";
import Categories from "@/components/common/Categories/Categories";
import { useToastStore } from "@/store/useToastStore";

const VideoDetailContainer = () => {
  const {id} = useParams();
  const {data:video} = useGetVideo(id ?? "");
  const {data:videos} = useGetVideosQuery({category:undefined});
  const {addToast} = useToastStore();
  const { register } = useForm<CommentRequest>();
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast('주소가 복사되었습니다!');
  };
  return (
    <main className={styles.videoDetailPage}>
      <section className={styles.videoSection}>
        {video && <VideoPrimaryInfo video={video} handleCopyUrl={handleCopyUrl}/>}
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
          <Categories currentCategory={undefined} handleCategoryActive={()=>{}} />
        </div>
        <div className={styles.cateLists}>
          {videos?.map((item, idx) => (
            <StorageList item={item}  />
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
