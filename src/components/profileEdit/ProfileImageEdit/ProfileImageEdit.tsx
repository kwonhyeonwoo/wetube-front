import styles from "./css/index.module.css";
import type { UserReponse } from "@/interfaces/auth.type";
import ImgEditBox from "../ImgEditBox/ImgEditBox";

interface Props {
  data?: UserReponse;
}
const ProfileImageEdit = ({ data }: Props) => {
  return (
    <div className={styles.profileEditBox}>
        <ImgEditBox profile={data?.profile}/>
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
