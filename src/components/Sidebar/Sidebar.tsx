import "./css/index.css";
import { Link } from "react-router-dom";
import type { ISidebarSection } from "sidebar";

interface Props {
  sidebarData: ISidebarSection[];
}

const Sidebar = ({ sidebarData }: Props) => {
  return (
    <aside className='sidebar-wrapper'>
      {sidebarData.map(({ title, lists }, sidebarIndex) => (
        <div className="sidebar-group" key={sidebarIndex}>
          {title && <h2 className="sidebar-group-title">{title}</h2>}
          <ul className="sidebar-group-ul">
            {lists.map(({ text, link, icon, isProfile }, listIndex) => {
              const IconComponent = icon;

              return (
                <li className="sidebar-group-ul-li" key={listIndex}>
                  <Link to={link} className="sidebar-group-ul-li-link">
                    <div className="sidebar-icon-container">
                      {isProfile ? (
                        <img 
                          src={icon} 
                          alt="" 
                          className="sidebar-profile-img"
                        />
                      ) : (
                      
                        IconComponent && typeof IconComponent !== 'string' ? (
                          <IconComponent   className="sidebar-group-ul-li-icon" />
                        ) : (
                          <img src={icon as string} alt="" className="sidebar-group-ul-li-icon" />
                        )
                      )}
                    </div>
                    <span className="sidebar-group-ul-li-text">{text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;