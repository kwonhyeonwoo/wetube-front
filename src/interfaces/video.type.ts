export type CategoryType =
  | "movie"
  | "music"
  | "product-design"
  | "building"
  | "game"
  | "live"
  | "cooking"
  | "recents";
export interface VideoResponse {
  video: string;
  title: string;
  content: string;
  craetedAt:Date;
  meta: {
    views: number;
    rating: number;
  };
  category: CategoryType;
  hashtags: string[];
  owner:string;
  nickName: string;
  profile?: string;
  _id: string;
}

export interface ShortResponse {
  video: string;
  views: string;
  title: string;
  id: string;
}