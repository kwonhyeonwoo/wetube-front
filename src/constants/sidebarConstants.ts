import type { ISidebarSection, ISubscription } from "sidebar";

export const getSidebarContents = (subscriptions: ISubscription[]): ISidebarSection[] => [
    {
        lists: [
            {
                text: "홈",
                link: "/",
                icon: "/assets/sidebar/home.svg"
            },
            {
                text: "Shorts",
                link: "/shorts",
                icon: "/assets/sidebar/shorts.svg"
            },
        ]
    },
    {
        title: "구독",
        lists: [
            subscriptions.map((sub) => ({
                text: sub.name,
                link: `/subscriptions/${sub.id}`,
                icon: sub.profileImage,
                isProfile: true
            }))
        ]
    },
    {
        title: "내 페이지",
        lists: [
            {
                text: "내 동영상",
                icon: "",
                link: "/user/videos",
            },
            {
                text: "기록",
                icon: "",
                link: "/user/history",
            },
            {
                text: "재생목록",
                icon: "",
                link: "/user/playlists",
            }
        ]
    }
];