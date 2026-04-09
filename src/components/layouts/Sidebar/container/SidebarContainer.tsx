import styles from "../css/index.module.css";
import  { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { getSidebarContents } from '@/constants/sidebarConstants';
import SidebarList from "@/components/SidebarList/SidebarList";
import useUserStore from "@/store/useUserStore";
import type { ISubscription } from "@/interfaces/sidebar.type";

const SidebarContainer = () => {
    const {pathname} = useLocation();
    const {user} = useUserStore();
    const sidebarData = useMemo(() => {
        // if(!user.uid){
        //     return []
        // };
        return getSidebarContents(getTestData,user.uid)
    },[user.uid]);
  return  <aside className={styles.sidebarWrapper}>
    {sidebarData?.map(({ title, lists }, sidebarIndex) => (
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
}

export default SidebarContainer;

const getTestData:ISubscription[]=[
    {
        name:"김나리",
        id:"1",
        profileImage:"/assets/sidebar/profile.png",
    },
    {
        name:"김나리",
        id:"2",
        profileImage:"/assets/sidebar/profile.png",
    },
    {
        name:"김나리",
        id:"3",
        profileImage:"/assets/sidebar/profile.png",
    },
    {
        name:"김나리",
        id:"4",
        profileImage:"/assets/sidebar/profile.png",
    }
]