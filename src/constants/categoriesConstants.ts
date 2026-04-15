import type { CategoryType } from "@/interfaces/media.type";

export const categoriesConstants:{title:string,name:CategoryType}[] = [
    {
        title: "전체",
        name: undefined,
    },
    {
        title: "영화",
        name: "movie"
    },
    {
        title: "음악",
        name: "music"
    },
    {
        title: "제품 디자인",
        name: "product-design"
    },
    {
        title: "건축",
        name: "building"
    },
    {
        title: "게임",
        name: "game"
    },
    {
        title: "실시간",
        name: "live"
    },
    {
        title: "요리",
        name: "cooking"
    },
    {
        title: "최근에 본 영상",
        name: "recents"
    }
] as const;

export const writeCategory = [
    {
        title:"동영상",
        path:"/video/write",
    },
    {
        title:"쇼츠",
        path:"/shorts/write"
    }
]