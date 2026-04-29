import styles from "../css/index.module.css";
import { CommentSchema, type CommentType } from '@/schema/comment.schema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetUserQuery } from '@/hooks/queries/auth/useGetUserQuery';
import usePostCmtMutation from '@/hooks/mutations/comment/usePostCmtMutation';
import EmptyProfileIcon from "@/assets/common/unde-user.svg";

interface Props{
    videoId:string | undefined;
}

const CommentInputContainer = ({videoId}:Props) => {
    const { data: user } = useGetUserQuery();
    const { register, handleSubmit, setValue } = useForm<CommentType>({
        resolver: zodResolver(CommentSchema),
        defaultValues:{
          comment:"",
        }
    });
    const { mutate } = usePostCmtMutation(videoId ?? "");
    const onSubmit: SubmitHandler<CommentType> = (data) => {
        if (videoId) {
            mutate({
            videoId,
            comment: data.comment,
        });
        setValue("comment", "");
        }
    };
  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <img
        className={styles.profile}
        src={
          user?.avatar
            ? `${import.meta.env.VITE_APP_BASE_SRC}/${user?.avatar}`
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
}

export default CommentInputContainer