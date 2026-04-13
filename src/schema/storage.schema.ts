import z from "zod";

export const storageSchema = z.object({
    thumnail:z.instanceof(FileList,{message:"이미지 파일을 업로드 해주세요",}),
    title:z.string().min(5).max(15,"최대 20글자 입니다."),
    content:z.string().min(5).max(30,"최대 30글자 입니다."),
})

export type StorageType = z.infer<typeof storageSchema>;