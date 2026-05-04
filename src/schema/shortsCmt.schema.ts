import z from "zod";

export const shortsCmtSchema = z.object({
    comment:z.string().max(20,"최대 20자 입니다.")
});

export type ShortsCmtType = z.infer<typeof shortsCmtSchema>;