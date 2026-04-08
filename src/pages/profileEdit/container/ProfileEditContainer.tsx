import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import ProfileImageEdit from "@/components/profileEdit/ProfileImageEdit/ProfileImageEdit";
import ProfileInfoEditBox from "@/components/profileEdit/ProfileInfoEditBox/ProfileInfoEditBox";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useCallback } from "react";

const ProfileEditContainer = () => {
    const {id} = useParams();
    // const {data,isLoading} = useGetUser(id ?? "")
    const handleSubit = useCallback(
      (e:React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
      },
      [],
    )
    
    const data = {
        id:"12345",
        name:"권현우",
        nickName:"사악한현우",
        email:"khw19980926@gmail.com",
        profile:"",
        createdAt:new Date(),
        updatedAt:new Date(),
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
        <form onSubmit={() => {}} className={styles.profileForm}>
          <ProfileImageEdit data={data} />
          <ProfileInfoEditBox data={data} />
          <div className={styles.btnBox}>
            <SubmitButton text="수정하기" handleSubmit={() => {}} />
          </div>
        </form>
      </section>
    </main>
  );
}

export default ProfileEditContainer