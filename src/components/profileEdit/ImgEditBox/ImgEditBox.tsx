import type { UseFormRegister } from "react-hook-form";import styles from "./css/index.module.css"
import EditIcon from "@/assets/edit/edit.svg";
import type { UserEditType } from "@/schema/auth.schema";

interface Props{
    profile?:string;
    avatarPreview:string | null;
    register:UseFormRegister<UserEditType>;
}
const ImgEditBox = ({profile,avatarPreview,register}:Props) => {
  return (
    <div className={styles.imgEditBox}>
      <label htmlFor="profile" className={styles.labelBox}>
        {avatarPreview ? <img
          className={styles.profileImage}
          src={avatarPreview}
        /> : (
          <div className={`${styles.profileImage} ${!profile && styles.profileUndeImage}`} />
        )}
        <div className={styles.editBtn}>
          <img src={EditIcon} alt="edit" />
        </div>
      </label>
      <input 
        type="file" 
        id="profile" 
        accept="image/*"
        {...register('avatar')}
        style={{ display: "none" }} />
    </div>
  );
}

export default ImgEditBox