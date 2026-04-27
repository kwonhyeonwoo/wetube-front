import UndeProfile from "@/assets/common/unde-user.svg";
import styles from "./css/index.module.css";
import { Link } from 'react-router-dom';
import { useLogoutMutation } from "@/hooks/mutations/auth/useLogoutMutation";
import type { IUserMe } from "@/interfaces/auth.type";

interface Props{
  user:IUserMe;
}

const UserActions = ({user}:Props) => {
  const {mutate} = useLogoutMutation();
  const handleLogout = ()=> mutate();
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
      <Link to={`/user/${user.uid}/featured`} className={styles.profile}>
        <img
          src={
            user.avatar
              ? `${import.meta.env.VITE_APP_BASE_SRC}/${user.avatar}`
              : UndeProfile
          }
          alt={`${user.nickName}-profile`}
          className={styles.userProfile}
        />{" "}
        
      </Link>
      <button
        onClick={handleLogout}
        className={styles.rightHeaderWrapperAlertButton}
      >
        로그아웃
      </button>
    </div>
  );
}

export default UserActions