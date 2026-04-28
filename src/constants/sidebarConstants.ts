import HomeIcon from '@/assets/sidebar/home.svg';
import ShortsIcon from '@/assets/sidebar/shorts.svg';
import VideosIcon from '@/assets/sidebar/videos.svg';
import HistoryIcon from '@/assets/sidebar/history.svg';
import PlayListsIcon from '@/assets/sidebar/playlists.svg';
import UndeProfileIcon from "@/assets/common/unde-user.svg";
import type { ISidebarSection } from '@/interfaces/sidebar.type';
import type { FollowingResponse } from '@/interfaces/auth.type';
export const getSidebarContents = (
  following: FollowingResponse[],
  userId: string,
): ISidebarSection[] => [
  {
    lists: [
      {
        text: "홈",
        link: "/",
        icon: HomeIcon,
      },
      {
        text: "Shorts",
        link: "/shorts",
        icon: ShortsIcon,
      },
    ],
  },
  {
    title: "구독",
    lists: following.map((sub) => ({
      text: sub.nickName,
      link: `/user/${sub._id}/featured`,
      icon: sub.avatar
        ? `${import.meta.env.VITE_APP_BASE_SRC}/${sub.avatar}`
        : UndeProfileIcon,
    })),
  },
  {
    title: "내 페이지",
    lists: [
      {
        text: "내 동영상",
        icon: VideosIcon,
        link: `/user/${userId}/videos`,
      },
      {
        text: "보관함",
        icon: PlayListsIcon,
        link: `/video/${userId}/storage`,
      },
    ],
  },
];