import styles from "./css/index.module.css";
import ImgEditBox from "../ImgEditBox/ImgEditBox";
import type { UserResponse } from "@/interfaces/auth.type";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";
import type { UserEditType } from "@/schema/auth.schema";

interface Props {
  avatar:string | null;
  register:UseFormRegister<UserEditType>;
  watch:UseFormWatch<UserEditType>;
  data?: UserResponse;
}
const ProfileImageEdit = ({ avatar,data, watch,register }: Props) => {

  return (
    <div className={styles.profileEditBox}>
        <ImgEditBox avatarPreview={avatar}profile={data?.avatar} register={register}/>
        <div className={styles.imgTextBox}>
            <h2 className={styles.imgText}>프로필 사진</h2>
            <p className={styles.imgContent}>
            800x800 픽셀 이상의 사진을 권장합니다. JPG, GIF, PNG 파일을
            사용하세요.
            </p>
        </div>
    </div>
  );
};

export default ProfileImageEdit;
