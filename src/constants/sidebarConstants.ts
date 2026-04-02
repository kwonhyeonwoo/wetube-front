import type { ISidebarSection, ISubscription } from "sidebar";
import HomeIcon from '../assets/sidebar/home.svg?react';
import ShortsIcon from '../assets/sidebar/shorts.svg?react';
import VideosIcon from '../assets/sidebar/videos.svg?react';
import HistoryIcon from '../assets/sidebar/history.svg?react';
import PlayListsIcon from '../assets/sidebar/playlists.svg?react';
export const getSidebarContents = (subscriptions: ISubscription[]): ISidebarSection[] => [
    {
        lists: [
            {
                text: "홈",
                link: "/",
                icon: HomeIcon
            },
            {
                text: "Shorts",
                link: "/shorts",
                icon: ShortsIcon
            },
        ]
    },
    {
        title: "구독",
        lists: subscriptions.map((sub) => ({
            text: sub.name,
            link: `/subscriptions/${sub.id}`,
            icon: sub.profileImage,
            isProfile: true
        }))
    },
    {
        title: "내 페이지",
        lists: [
            {
                text: "내 동영상",
                icon:VideosIcon,
                link: "/user/1234/videos",
            },
            {
                text: "기록",
                icon: HistoryIcon,
                link: "/video/history",
            },
            {
                text: "재생목록",
                icon: PlayListsIcon,
                link: "/video/play-list",
            }
        ]
    }
];