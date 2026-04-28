import { useForm, type SubmitHandler} from "react-hook-form";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
import styles from "./css/index.module.css";
import { CommentSchema, type CommentType } from "@/schema/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostComment from "@/hooks/queries/comment/usePostComment";

interface Props {
    avatar?:string;
    videoId:string | undefined;
}
const CommentInput = ({avatar, videoId }: Props) => {
  const { register, handleSubmit, setValue } = useForm<CommentType>({
    resolver: zodResolver(CommentSchema),
  });
  const {mutate} = usePostComment(videoId ?? "");
  const onSubmit: SubmitHandler<CommentType> = (data) => {
    if(videoId){
       mutate({
         videoId,
         comment: data.comment,
       });
       setValue('comment',"")
    }
  };
  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <img
        className={styles.profile}
        src={
          avatar
            ? `${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`
            : EmptyProfileIcon
        }
        alt=""
      />
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