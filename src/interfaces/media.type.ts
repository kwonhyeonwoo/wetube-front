import type { ShortsType, VideoType } from "@/schema/media.schema";
import type { UserResponse } from "./auth.type";

export type CategoryType=
"movie"
| "music"
| "product-design"
| "building"
| "game"
| "live"
| "cooking"
| "recents"

export interface ShortsResponse extends ShortsType{
    meta: {
      views: number;
      rating: number;
    };
    craetedAt:Date;
    owner:UserResponse;
};

export interface VideoResponse extends VideoType{
    meta: {
        views: number;
        rating: number;
      };
      craetedAt:Date;
      owner:UserResponse;
}