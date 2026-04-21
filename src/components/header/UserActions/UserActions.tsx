import type { SessionUser } from "@/interfaces/auth.type";
import styles from "./css/index.module.css";
import { Link } from 'react-router-dom';
import { useAuthLogout } from "@/hooks/queries/auth/useAuthLogout";

interface Props{
  user:SessionUser;
}

const UserActions = ({user}:Props) => {
  const {mutate} = useAuthLogout(user.uid);
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
      <Link to={`/user/${user.uid}`} className={styles.profile}>
          {user.profile ? 
            <img 
              src={`${import.meta.env.VITE_APP_BASE_SRC}/${user.profile}`}
              alt={`${user.nickName}-profile`} 
              className={styles.userProfile}
            /> : 
              <div className={styles.undeProfile}/>
          }
      </Link>
      <button onClick={handleLogout} className={styles.rightHeaderWrapperAlertButton}>
          로그아웃
      </button>
    </div>
  );
}

export default UserActions