import CommentInput from '../CommentInput'
import { CommentSchema, type CommentType } from '@/schema/comment.schema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetUserQuery } from '@/hooks/queries/auth/useGetUserQuery';
import usePostCmtMutation from '@/hooks/mutations/comment/usePostCmtMutation';

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
    <CommentInput
      avatar={user?.avatar}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
    />
  );
}

export default CommentInputContainer