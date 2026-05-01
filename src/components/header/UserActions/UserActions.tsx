import UndeProfile from "@/assets/common/unde-user.svg";
import styles from "./css/index.module.css";
import { Link } from "react-router-dom";
import type { UserResponse } from "@/interfaces/auth.type";

interface Props {
  user: UserResponse;
  handleLogOut: () => void;
}

const UserActions = ({ user, handleLogOut }: Props) => {
  return (
    <div className={styles.rightHeaderWrapper}>
      <Link to="/video/write" className={styles.rightHeaderWrapperWriteButton}>
        <img
          src="/assets/header/plus.png"
          srcSet="/assets/header/plus@2x.png 2x,
            /assets/header/plus@3x.png 3x,
          "
          alt="glass"
        />
        <span className={styles.rightHeaderWrapperWriteButtonText}>만들기</span>
      </Link>
      <Link to={`/user/${user._id}/featured`} className={styles.profile}>
        <img
          src={
            user.avatar
              ? `${import.meta.env.VITE_APP_BASE_SRC}/${user.avatar}`
              : UndeProfile
          }
          alt={`${user.nickName}-profile`}
          className={styles.userProfile}
        />
      </Link>
      <button
        onClick={handleLogOut}
        className={styles.rightHeaderWrapperAlertButton}
      >
        로그아웃
      </button>
    </div>
  );
};

export default UserActions;
