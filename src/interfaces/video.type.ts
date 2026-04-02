export interface VideoResponse {
  video: string;
  title: string;
  content: string;
  views: string;
  category: string;
  tags: string[];
  nickName: string;
  date: Date;
  profile?: string;
  id: string;
}

export interface ShortResponse {
  video: string;
  views: string;
  title: string;
  id: string;
}