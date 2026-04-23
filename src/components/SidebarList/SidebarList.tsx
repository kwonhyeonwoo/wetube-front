import styles from "./css/index.module.css";
import { Link } from "react-router-dom";
import type { ElementType } from "react";
interface Props {
  link: string;
  isActivePathname: boolean;
  icon: ElementType |  string;
  text: string;
}
const SidebarList = ({
    link,
    isActivePathname,
    icon: Icon,
    text,
}:Props) => {
  return (
    <li
      className={`${styles.sidebarGroupUlLi} ${isActivePathname ? styles.sidebarGroupUlLiActive : ''}`}
    >
      <Link to={link} className={styles.sidebarGroupUlLiLink}>
        <div className="sidebar-icon-container">
          {typeof Icon === "string" && (
            <img 
              src={Icon} alt={`${text} 아이콘`}  
              className={
                Icon.includes(import.meta.env.VITE_APP_BASE_SRC) ? styles.iconImage : styles.icon
              }
            />
          )}
        </div>
        <span
          className={`${styles.sidebarGroupUlLiText} ${isActivePathname ? styles.activeLiText : ''}`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

export default SidebarList