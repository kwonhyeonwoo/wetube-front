import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import ProfileImageEdit from "@/components/profileEdit/ProfileImageEdit/ProfileImageEdit";
import ProfileInfoEditBox from "@/components/profileEdit/ProfileInfoEditBox/ProfileInfoEditBox";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useCallback } from "react";
import { useGetUser } from "@/hooks/queries/auth/useAuthQuery";
import { useForm,type SubmitErrorHandler,type SubmitHandler } from "react-hook-form";
import { baseAuthSchema,
type UserEditType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserEditMutation } from "@/hooks/queries/auth/useAuthMutation";
import { usePreviewVideo } from "@/hooks/usePreviewVideo";

const ProfileEditContainer = () => {
    const {id} = useParams();
    const {data:user} = useGetUser(id ?? "");
    const {mutate:editUser} = useUserEditMutation(id ?? "")
    const {register, handleSubmit, watch,} = useForm<UserEditType>({
      resolver:zodResolver(baseAuthSchema),
      values : user ? {
          nickName:user.nickName,
          name:user.name,
          email:user.email,
    avatar: undefined,
      }:undefined 
    });
    const [videoPreview] = usePreviewVideo(watch('avatar'))
    const onSubmit:SubmitHandler<UserEditType> = useCallback(
      (data) => {
        console.log('data',data)
        if(id){
          editUser({data:{
            nickName:data.nickName,
            name:data.name,
            email:data.email,
            avatar:data.avatar ?? watch('avatar'),
            introduction: data.introduction ?? watch('introduction')
          }, id});
        }
      },
      [id],
    )
    const onInValid :SubmitErrorHandler<UserEditType>=useCallback(
      (error) => {
        console.log('error',error)
      },
      [],
    )
    
    if(!user){
      return ;
    }
  return (
    <main className={styles.profileEditPage}>
      <section className={styles.titleSection}>
        <h2 className={styles.title}>프로필 수정</h2>
        <p
          className={styles.subText}
        >{`당신의 채널 정체성을 관리하세요. 변경사항은 다른 Google 서비스에도 반영될
    수 있습니다.`}</p>
      </section>
      <section className={styles.profileEditSection}>
        <form onSubmit={handleSubmit(onSubmit,onInValid)} className={styles.profileForm}>
          <ProfileImageEdit  avatar={videoPreview} data={user}watch={watch} register={register}/>
          <ProfileInfoEditBox data={user} />
          <div className={styles.btnBox}>
            <SubmitButton text="수정하기" type="submit" handleSubmit={() => {}} />
          </div>
        </form>
      </section>
    </main>
  );
}

export default ProfileEditContainer