import styles from "./css/index.module.css";
import ImgEditBox from "../ImgEditBox/ImgEditBox";
import type { UserResponse } from "@/interfaces/auth.type";

interface Props {
  avatarPreview:string | null;
  data?: UserResponse;
  addPreviewMedia: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProfileImageEdit = ({ avatarPreview,data,addPreviewMedia  }: Props) => {
  
  return (
    <div className={styles.profileEditBox}>
        <ImgEditBox 
          avatarPreview={avatarPreview}
          profile={data?.avatar} 
          addPreviewMedia={addPreviewMedia}
        />
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
