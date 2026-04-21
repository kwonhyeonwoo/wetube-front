import { useForm, type SubmitHandler, type UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";
import type { CommentRequest } from "@/interfaces/comment.type";
import { CommentSchema, type CommentType } from "@/schema/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostComment from "@/hooks/queries/comment/usePostComment";

interface Props {
    videoId:string | undefined;
}
const CommentInput = ({ videoId }: Props) => {
  const { register, handleSubmit } = useForm<CommentType>({
    resolver: zodResolver(CommentSchema),
  });
  const {mutate} = usePostComment(videoId ?? "");
  const onSubmit: SubmitHandler<CommentType> = (data) => {
    console.log('data',data)
    if(videoId){
       mutate({
         videoId,
         comment: data.comment,
       });
    }
  };
  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profile} />
      <input
        type="text"
        placeholder="댓글 추가..."
        className={styles.input}
        {...register("comment")}
      />
    </form>
  );
};

export default CommentInput