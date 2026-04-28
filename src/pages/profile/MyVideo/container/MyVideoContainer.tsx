import { useUserVideosQuery } from "@/hooks/queries/auth/useUserVideosQuery";
import ProfileVideoCard from "../../components/ProfileVideoCard/ProfileVideoCard";
import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import Empty from "@/components/Empty/Empty";


const MyVideoContainer = () => {
  const {id} = useParams();
  const {data:videos} = useUserVideosQuery(id ?? "");
  return (
    <section className={styles.myVideoSection}>
      {videos && videos.length >0 ? (
        <div className={styles.videosBox}>
        {videos?.map((item,idx)=>(
          <ProfileVideoCard
            key={idx}
            video={item.video}
            title={item.title}
            meta={item.meta}
            createdAt={item.createdAt}
            height="171px"
          />
        ))}
      </div>
      ):<Empty text="업로드 된 영상이 없습니다"/>}
    </section>
  )
}

export default MyVideoContainer;

const videoArr: {
  video: string;
  title: string;
  meta: { views: number };
  createdAt: Date;
}[] = [
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
  {
    video: "",
    title:
      "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 첫 곡부터 합격.. 120분 국내 감성힙합 💿 | R&B 인스타 느좋 플리",
    meta: {
      views: 12,
    },
    createdAt: new Date("2026-04-24"),
  },
];
