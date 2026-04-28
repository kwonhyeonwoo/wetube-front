import { categoriesConstants } from "@/constants/categoriesConstants";

export const getFindCategory = (category: string) => {
  const findCategory = categoriesConstants.find(
    (item) => item.name === category,
  );
  return findCategory?.title;
};

export const formatVideoTime = (time: number) => {
  if (!time || isNaN(time)) {
    return "00:00";
  }
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export const formatDateWithTimezone = (isoString: string): string => {
  if (!isoString) return "";
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getRelativeTime = (dateString: string | Date): string => {
  const now = new Date();
  const target = new Date(dateString);

  // 현재 시간과 타겟 시간의 차이를 초(second) 단위로 계산합니다.
  const diffInSeconds = Math.floor((now.getTime() - target.getTime()) / 1000);

  // 1분 미만
  if (diffInSeconds < 60) {
    return "방금 전";
  }

  // 1시간 미만
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  // 하루(24시간) 미만
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    // 만약 "1시간 전" 대신 무조건 "오늘"이라고 띄우고 싶다면
    // return "오늘"; 이라고 하셔도 됩니다! (보통 영상 플랫폼은 시간 전을 선호합니다)
    return `${diffInHours}시간 전`;
  }

  // 일(Day) 계산
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return "어제";
  }
  if (diffInDays < 30) {
    return `${diffInDays}일 전`;
  }

  // 달(Month) 계산
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}개월 전`;
  }

  // 년(Year) 계산
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}년 전`;
};