import { z } from "zod"

export const baseAuthSchema = z.object({
    nickName: z.string().min(3).max(10),
    name: z.string().min(3).max(10),
    introduction: z.string().min(10).max(30).optional(),
    email: z.email(),
    avatar: z.instanceof(File).optional(),
});

export type UserEditType = z.infer<typeof baseAuthSchema>;