import HomeIcon from '../assets/sidebar/home.svg?react';
import ShortsIcon from '../assets/sidebar/shorts.svg?react';
import VideosIcon from '../assets/sidebar/videos.svg?react';
import HistoryIcon from '../assets/sidebar/history.svg?react';
import PlayListsIcon from '../assets/sidebar/playlists.svg?react';
import type { ISidebarSection, ISubscription } from '@/interfaces/sidebar.type';
export const getSidebarContents = (subscriptions: ISubscription[],userId:string): ISidebarSection[] => [
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
                link:`/user/${userId}/videos`,
            },
            {
                text: "기록",
                icon: HistoryIcon,
                link: "/video/history",
            },
            {
                text: "보관함",
                icon: PlayListsIcon,
                link: `/user/${userId}/storage`
            }
        ]
    }
];