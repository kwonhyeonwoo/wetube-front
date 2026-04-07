import VideoPrimaryInfo from "@/components/video/VideoPrimaryInfo/VideoPrimaryInfo";import styles from "../css/index.module.css";

import { useLocation } from "react-router-dom";
import VideoComment from "@/pages/VideoComment/VideoComment";
import type { IComment } from "@/interfaces/comment.type";

const VideoDetailContainer = () => {
    const {state} = useLocation();
    console.log('state',state);
  return (
    <main className={styles.videoDetailPage}>
        <section className={styles.videoSection}>
            <VideoPrimaryInfo/>
            {comments.map((item)=>(
                <VideoComment {...item} commentCount={String(comments.length)}/>
            ))}
        </section>
        <section className={styles.videoListSection}>
            12345
        </section>
    </main>
  )
}

export default VideoDetailContainer;

const comments:IComment[]=[
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },
    {
        comment:"너무 이뻐요 이거 어뜩해요?",
        nickName:"사악한혀누",
        date:"1개월 전",
        cmtId:"jsdkljfksjkfl",
        authorId:"sdjflksj12345"
    },

]