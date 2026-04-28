import type { ShortsType, VideoType } from "@/schema/media.schema";
import type { OwnerType, UserResponse } from "./auth.type";

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
  isSaved:boolean;
  owner: OwnerType;
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