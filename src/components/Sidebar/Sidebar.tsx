import "./css/index.css";
import type { ISidebarSection } from "sidebar";
import SidebarList from "../SidebarList/SidebarList";

interface Props {
  pathname:string;
  sidebarData: ISidebarSection[];
}

const Sidebar = ({pathname, sidebarData }: Props) => {
  return (
    <aside className='sidebar-wrapper'>
      {sidebarData.map(({ title, lists }, sidebarIndex) => (
        <div className="sidebar-group" key={sidebarIndex}>
          {title && <h2 className="sidebar-group-title">{title}</h2>}
          <ul className="sidebar-group-ul">
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