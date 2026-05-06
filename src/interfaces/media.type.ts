import type { ShortsType, VideoType } from "@/schema/media.schema";
import type { OwnerType } from "./auth.type";
import type { ShortsCmtResponse } from "./shorts.type";

export type CategoryType =
  "movie"
  | "music"
  | "product-design"
  | "building"
  | "game"
  | "live"
  | "cooking"
  | "recents"
  | undefined

export interface ShortsResponse extends Omit<ShortsType, "shorts"> {
  shorts: string;
  _id: string;
  meta: {
    views: number;
    rating: number;
  };
  createdAt: Date;
  isSaved: boolean;
  owner: OwnerType;
  comments: ShortsCmtResponse[];
  likes?: string[];
  isLiked: boolean;
  isShortSaved: boolean;
};

export interface VideoResponse extends Omit<VideoType, "video"> {
  video: string;
  _id: string;
  meta: {
    views: number;
    rating: number;
  };
  createdAt: Date;
  owner: OwnerType;
  likes?: string[];
  isSaved: boolean;
}