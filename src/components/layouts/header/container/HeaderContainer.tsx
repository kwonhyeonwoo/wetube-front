import styles from "../css/index.module.css";
import LeftHeader from '@/components/header/LeftHeader/LeftHeader';
import CenterHeader from "@/components/header/CenterHeader/CenterHeader";
import RightHeader from "@/components/header/RightHeader/RightHeader";
import useUserStore from "@/store/useUserStore";

const HeaderContainer = () => {
  const {user} = useUserStore();  
  return (
    <header className={styles.header}>
      <LeftHeader />
      <CenterHeader />
      <RightHeader  user={user}/>
    </header>
  );
}

export default HeaderContainer