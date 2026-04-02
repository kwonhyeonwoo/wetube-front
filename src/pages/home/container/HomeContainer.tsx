import type { IShort, IVideo } from "@/@types/video.type";
import Home from "../Home"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  const handleVideoDetail = useCallback(
    (id:string) => {
      navigate(`/video/${id}`)
    },
    [navigate],
  )
  
  return (
    <Home
      videos={videos}
      shorts={shorts}
      handleVideoDetail={handleVideoDetail}
    />
  );
}

export default HomeContainer;

const videos: IVideo[] = [
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
  {
    video: "/assets/videos/test-video.mp3",
    title:
      "미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!",
    content: "제발 기름값좀 내려줘~~~~진짜 미쳐버릴거같다 이거야..",
    nickName: "사악한현우",
    views: "1000",
    category: "공부",
    tags: ["#전쟁", "#공부", "#주식", "좃됨"],
    date: new Date(),
    profile:"/assets/sidebar/profile.png",
    id:"asdfsdf"
  },
];

const shorts: IShort[] = [
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },

];