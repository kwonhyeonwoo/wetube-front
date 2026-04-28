import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import ProfileImageEdit from "@/components/profileEdit/ProfileImageEdit/ProfileImageEdit";
import ProfileInfoEditBox from "@/components/profileEdit/ProfileInfoEditBox/ProfileInfoEditBox";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useCallback } from "react";
import { useForm,type SubmitErrorHandler } from "react-hook-form";
import { baseAuthSchema,
type UserEditType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMediaPreview } from "@/hooks/useMediaPreview";
import { useProfileEditMutation } from "@/hooks/mutations/auth/useProfileEditMutation";
import { useGetUserQuery } from "@/hooks/queries/auth/useGetUserQuery";

const ProfileEditContainer = () => {
    // const {id} = useParams();
    // const {data:user} = useGetUserQuery(id ?? "");
    // const {mutate:editUser} = useProfileEditMutation(id ?? "")
    // const {register, handleSubmit, watch,setValue} = useForm<UserEditType>({
    //   resolver:zodResolver(baseAuthSchema),
    //   values : user ? {
    //       nickName:user.nickName,
    //       name:user.name,
    //       email:user.email,
    //       avatar: user?.avatar as File | undefined,
    //       introduction: user?.introduction,
    //   }:undefined 
    // });
    // const {mediaPreview, addPreviewMedia} = useMediaPreview({setValue,name:"avatar"});

    //   const onSubmit = (data: UserEditType) => {
    //     if (id) {
    //       editUser({
    //         data: {
    //           nickName: data.nickName,
    //           name: data.name,
    //           email: data.email,
    //           avatar: data.avatar,
    //           introduction: data.introduction,
    //         },
    //         id,
    //       });
    //     }
    //   };
    //       const onInValid :SubmitErrorHandler<UserEditType>=useCallback(
    //   (error) => {
    //     console.log('error',error)
    //   },
    //   [],
    // )
    // if(!user){
    //   return ;
    // }
  return (
    <main className={styles.profileEditPage}>
      {/* <section className={styles.titleSection}>
        <h2 className={styles.title}>프로필 수정</h2>
        <p
          className={styles.subText}
        >{`당신의 채널 정체성을 관리하세요. 변경사항은 다른 Google 서비스에도 반영될
    수 있습니다.`}</p>
      </section>
      <section className={styles.profileEditSection}>
        <form onSubmit={handleSubmit(onSubmit,onInValid)} className={styles.profileForm}>
          <ProfileImageEdit  
              avatarPreview={mediaPreview} 
              data={user}
              addPreviewMedia={addPreviewMedia}
          />
          <ProfileInfoEditBox watch={watch} register={register} />
          <div className={styles.btnBox}>
            <SubmitButton text="수정하기" type="submit" handleSubmit={() => {}} />
          </div>
        </form>
      </section> */}
    </main>
  );
}

export default ProfileEditContainer