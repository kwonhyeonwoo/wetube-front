import type { UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";
import type { CommentRequest } from "@/interfaces/comment.type";

interface Props {
  register: UseFormRegister<CommentRequest>;
}
const CommentInput = ({register}:Props) => {
  return (
    <form className={styles.commentForm}>
        <div className={styles.profile}/>
        <input 
            type="text" 
            placeholder="댓글 추가..."
            className={styles.input}
            {...register('comment')}
        />
    </form>
  )
}

export default CommentInput