import {z} from "zod"

export const baseAuthSchema = z.object({
    nickName:z.string().min(3).max(10),
    name:z.string().min(3).max(10),
    introduction:z.string().min(10).max(30).optional(),
    email:z.email(),
});

export const userEditSchema = baseAuthSchema.extend({
    avatar:z.instanceof(FileList).optional(),
})

export type UserEditType = z.infer<typeof userEditSchema>;