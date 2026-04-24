import type { ShortsType, VideoType } from "@/schema/media.schema";
import type { UserResponse } from "./auth.type";

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
  craetedAt: Date;
  owner: UserResponse;
};

export interface VideoResponse extends Omit<VideoType, "video"> {
  video: string;
  _id: string;
  id: string;
  meta: {
    views: number;
    rating: number;
  };
  craetedAt: Date;
  owner: UserResponse;
  likes?: string[];
  isSaved: boolean;
}