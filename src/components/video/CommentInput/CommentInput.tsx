import EmptyProfileIcon from "@/assets/common/unde-user.svg";
import styles from "./css/index.module.css";
import type { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import type { CommentType } from "@/schema/comment.schema";

interface Props {
    avatar?:string;
    register:UseFormRegister<CommentType>;
    handleSubmit:UseFormHandleSubmit<CommentType>
    onSubmit:SubmitHandler<CommentType>
}
const CommentInput = ({avatar,onSubmit ,handleSubmit,register}: Props) => {
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