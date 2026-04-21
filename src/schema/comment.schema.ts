import z from "zod";

export const CommentSchema = z.object({
    comment:z.string()
});

export type CommentType = z.infer<typeof CommentSchema>;