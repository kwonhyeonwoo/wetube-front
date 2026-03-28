import styles from "./css/index.module.css";
import LeftHeader from "../../LeftHeader/LeftHeader";
import CenterHeaderContainer from "../../CenterHeader/container/CenterHeaderContainer";
import RightHeaderContainer from "../../RightHeader/container/RightHeaderContainer";

interface Props{
    pathname:string;
}
const Header = ({pathname}:Props) => {
  return (
    <header className={styles.header}>
       <LeftHeader/>
       <CenterHeaderContainer/>
       <RightHeaderContainer/>
    </header>
  )
}

export default Header