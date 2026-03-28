import styles from "./css/index.module.css";
import { Link } from "react-router-dom";
import type { ElementType } from "react";

interface Props {
  link: string;
  isActivePathname: boolean;
  IconComponent: ElementType;
  isProfile: boolean;
  icon: string;
  text: string;
}
const SidebarList = ({
    link,
    isActivePathname,
    icon,
    IconComponent,
    text,
    isProfile,
}:Props) => {
  return (
    <li className={`${styles.sidebarGroupUlLi} ${isActivePathname && styles.sidebarGroupUlLiActive}`}>
      <Link
        to={link}
        className={styles.sidebarGroupUlLiLink}
      >
        <div className="sidebar-icon-container">
          {isProfile ? (
            <img src={icon} alt="" className="sidebar-profile-img" />
          ) : IconComponent && typeof IconComponent !== "string" ? (
            <IconComponent className={isActivePathname && "active-menu-svg"} />
          ) : (
            <img
              src={icon as string}
              alt=""
              className="sidebar-group-ul-li-icon"
            />
          )}
        </div>
        <span
          className={`
            ${styles.sidebarGroupUlLiText} ${isActivePathname && styles.activeLiText}`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

export default SidebarList