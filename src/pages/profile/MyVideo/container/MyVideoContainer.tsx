import ProfileVideoCard from "../../components/ProfileVideoCard/ProfileVideoCard";
import styles from "../css/index.module.css";


const MyVideoContainer = () => {
  return (
    <section className={styles.myVideoSection}>
      <div className={styles.videosBox}>
        {videoArr.map((item,idx)=>(
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
