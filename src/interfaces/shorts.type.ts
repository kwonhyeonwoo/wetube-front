import type { UserResponse } from "./auth.type";

export interface ShortsCmtResponse {
    _id: string;
    comment: string;
    onwer: UserResponse;
    createdAt: Date;
    shorts: string;
}