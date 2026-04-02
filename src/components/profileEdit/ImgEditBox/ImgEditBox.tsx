import styles from "./css/index.module.css"
import EditIcon from "@/assets/edit/edit.svg";

interface Props{
    profile?:string;
}
const ImgEditBox = ({profile}:Props) => {
  return (
    <div className={styles.imgEditBox}>
      <label htmlFor="profile" className={styles.labelBox}>
        <div className={`${`profileImage`} ${!profile && styles.profileUndeImage}`} />
        <div className={styles.editBtn}>
          <img src={EditIcon} alt="edit" />
        </div>
      </label>
      <input type="file" id="profile" style={{ display: "none" }} />
    </div>
  );
}

export default ImgEditBox