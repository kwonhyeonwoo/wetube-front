import styles from "../css/index.module.css";
import { useLocation } from 'react-router-dom'
import LeftHeader from '@/components/header/LeftHeader/LeftHeader';
import CenterHeader from "@/components/header/CenterHeader/CenterHeader";
import RightHeader from "@/components/header/RightHeader/RightHeader";
import useUserStore from "@/store/useUserStore";

const HeaderContainer = () => {
  const {isLoggedIn} = useUserStore();  
  const {pathname} = useLocation();

  return (
    <header className={styles.header}>
      <LeftHeader />
      <CenterHeader />
      <RightHeader isLogin={isLoggedIn}/>
    </header>
  );
}

export default HeaderContainer