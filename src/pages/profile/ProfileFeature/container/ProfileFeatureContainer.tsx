import BestMedia from "../../components/BestMedia/BestMedia";
import useMediaAction from "../../hooks/useMediaAction";
import styles from "../css/index.module.css";
import MediaTrackContainer from "../../components/MediaTrack/container/MediaTrackContainer";
// import type { VideoResponse } from "@/interfaces/media.type";

const ProfileFeatureContainer = () => {
  const { handleMediaAction } = useMediaAction();
  return (
    <section className={styles.feature}>
      <BestMedia handleMediaAction={handleMediaAction} />
      <div className={styles.mediaTrackBox}>
        <MediaTrackContainer videos={videoArr} type="video" />
        <MediaTrackContainer videos={videoArr} type="shorts" />
      </div>
    </section>
  );
};

export default ProfileFeatureContainer;

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
