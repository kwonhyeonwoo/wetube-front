import { z } from "zod";
export const baseMediaSchema = z.object({
    title: z.string().min(5, "최소 5글자 이상 입니다."),
    content: z.string().min(10, "최소 10글자 이상 입니다."),
    categories: z.enum(["movie", "music", "product-design", "building", "game", "live", "cooking", "recents"]),
    hashtags: z.array(z.string()),
});

export const videoSchema = baseMediaSchema.extend({
    video: z.instanceof(File)
});

export const shortsSchema = baseMediaSchema.extend({
    shorts: z.instanceof(File)
});

export const videoEditSchema = baseMediaSchema.extend({
    video: z.instanceof(File).optional(),
})

// infer은 zod에서 사용 한 타입을 typscript로 다시 변환해주는 기능
export type VideoType = z.infer<typeof videoSchema>;
export type ShortsType = z.infer<typeof shortsSchema>;
export type VideoEditType = z.infer<typeof videoEditSchema>