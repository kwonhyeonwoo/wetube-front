import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "../css/index.module.css";
import EmpthyIcon from "@/assets/common/unde-user.svg";
import { shortsCmtSchema, type ShortsCmtType } from "@/schema/shortsCmt.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostShortsCmtMutation } from "@/hooks/mutations/shortsCmt/usePostShortsCmtMutation";
import { useParams } from "react-router-dom";
interface Props{
    avatar?:string;
}
const ShortCmtInputContainer = ({avatar}:Props) => {
    const { shortsId} = useParams();
    const { mutate } = usePostShortsCmtMutation();
    const {register,handleSubmit,setValue} = useForm<ShortsCmtType>({
        resolver:zodResolver(shortsCmtSchema),
        defaultValues:{
            comment:"",
        }
    });

    const onSubmit:SubmitHandler<ShortsCmtType> =(data)=>{
        mutate({
          shortsId: shortsId??"",
          comment: data.comment,
        });
        setValue("comment", "");
    }
    return (
        <form className={styles.inputForm} onSubmit={handleSubmit(onSubmit)}>
            <img
                className={styles.profile}
                src={
                    avatar ? `${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`
                    : EmpthyIcon
                }
            />
            <input 
                className={styles.input}
                type="text" 
                placeholder="댓글 추가 ..."
                {...register('comment')}
            />
        </form>
    )
}

export default ShortCmtInputContainer