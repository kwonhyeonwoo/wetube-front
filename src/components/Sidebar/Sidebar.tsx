import { Link } from "react-router-dom";
import type { ISidebarSection } from "sidebar";

interface Props{
    sidebarData:ISidebarSection[];
}
const Sidebar = ({sidebarData}:Props) => {

  return (
    <aside className='sidebar-wrapper'>
       {sidebarData.map(({title,lists},sidebarIndex)=>(
            <div className="sidebar-gropu" key={sidebarIndex}>
                {title && <h2 className="sidebar-group-title">{title}</h2>}
                <ul className="sidebar-group-ul">
                    {lists.map(({text,link,icon,isProfile},listIndex)=>{
                        const Icon = icon;
                        return(
                            <li className="sidebar-group-ul-li" key={listIndex}>
                                <Link to={link} className="sidebar-group-ul-li-link">
                                    {isProfile ? 
                                        <img src={icon} alt={text}/> : <Icon className="sidebar-group-ul-li-icon"/>
                                    }
                                    <span className="sidebar-group-ul-li-text">{text}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
       ))}
    </aside>
  )
}

export default Sidebar;

