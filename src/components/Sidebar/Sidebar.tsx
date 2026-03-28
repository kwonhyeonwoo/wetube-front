import styles from "./css/index.module.css";
import SidebarList from "../SidebarList/SidebarList";
import type { ISidebarSection } from "sidebar";

interface Props {
  pathname:string;
  sidebarData: ISidebarSection[];
}

const Sidebar = ({pathname, sidebarData }: Props) => {
  return (
    <aside className={styles.sidebarWrapper}>
      {sidebarData.map(({ title, lists }, sidebarIndex) => (
        <div className={styles.sidebarGroup} key={sidebarIndex}>
          {title && <h2 className={styles.sidebarGroupTitle}>{title}</h2>}
          <ul className={styles.sidebarGroupUl}>
            {lists.map(({ text, link, icon, isProfile }, listIndex) => {
              const IconComponent = icon;
              const isActivePathname = link === pathname;
              return (
                <SidebarList
                  key={listIndex}
                  link={link}
                  isActivePathname={isActivePathname}
                  IconComponent={IconComponent}
                  isProfile={isProfile}
                  icon={icon}
                  text={text}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;