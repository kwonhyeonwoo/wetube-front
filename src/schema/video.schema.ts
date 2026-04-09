import { z } from "zod";
export const videoSchema = z.object({
    video: z.instanceof(FileList),
    title: z.string().min(5, "최소 5글자 이상 입니다.").max(50, "최대 50글자 입니다."),
    content: z.string().min(10, "최소 10글자 이상 입니다.").max(1000, "최대 1000글자 입니다."),
    categories: z.enum(["movie", "music", "product-design", "building", "game", "live", "cooking", "recents"]),
    tags: z.array(z.string()),
});

export type videoType = z.infer<typeof videoSchema>;