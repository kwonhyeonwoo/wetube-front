import { Link } from "react-router-dom";
import type { ElementType } from "react";
import "./css/index.css";

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
    <li className="sidebar-group-ul-li">
      <Link
        to={link}
        className={`sidebar-group-ul-li-link ${isActivePathname && "sidebar-group-ul-li-link-active"}`}
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
                      sidebar-group-ul-li-text ${isActivePathname && "active-li-text"}`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

export default SidebarList