import styles from "./css/index.module.css"
import EditIcon from "@/assets/edit/edit.svg";

interface Props{
    profile?:string;
    avatarPreview:string | null;
    addPreviewMedia: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImgEditBox = ({profile,avatarPreview,addPreviewMedia}:Props) => {
  return (
    <div className={styles.imgEditBox}>
      <label htmlFor="profile" className={styles.labelBox}>
        {
          profile && !avatarPreview ? (
            <img
              className={styles.profileImage}
              src={`${import.meta.env.VITE_APP_BASE_SRC}/${profile}`}
              alt="profile"
            />
          ) :(
            avatarPreview ? <img
              className={styles.profileImage}
              src={avatarPreview}
              alt="profile"
            /> : (
              <div className={`${styles.profileImage} ${styles.profileUndeImage}`} />
            )
          )
        }
        <div className={styles.editBtn}>
          <img src={EditIcon} alt="edit" />
        </div>
      </label>
      <input 
        type="file" 
        id="profile" 
        accept="image/*"
        onChange={addPreviewMedia}
        style={{ display: "none" }} />
    </div>
  );
}

export default ImgEditBox