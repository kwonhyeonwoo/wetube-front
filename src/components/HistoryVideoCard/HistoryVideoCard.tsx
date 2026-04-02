import type { VideoResponse } from "@/interfaces/video.type";
import styles from "./css/index.module.css";

interface Props{
    video:string;
    title:string;
    content:string;
    category:string;
    tags:string[];
    nickName:string;
    profile?:string;
    date:Date;
    id:string
}

const HistoryVideoCard = ({
    video,
    title,
    content,
    category,
    tags,
    nickName,
    profile,
    date,
    id
}:Props) => {
  return (
    <div>HistoryVideoCard</div>
  )
}

export default HistoryVideoCard