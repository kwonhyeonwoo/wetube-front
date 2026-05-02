import styles from "../css/index.module.css";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getSidebarContents } from "@/constants/sidebarConstants";
import SidebarList from "@/components/SidebarList/SidebarList";
import useGetFollwing from "@/hooks/queries/auth/userGetFollwing";
import { useUidStore } from "@/store/useUserStore";
import { useSidebarIsOpen } from "@/store/useSidebarToggleStore";

const SidebarContainer = () => {
  const { pathname } = useLocation();
  const uid = useUidStore()
  const isSidebarOpen = useSidebarIsOpen();
  const { data: following, isLoading } = useGetFollwing(uid ??"" );
  const sidebarData = useMemo(() => {
    return getSidebarContents(following ?? [], uid || "");
  }, [uid, following]);

  return (
    <aside className={
      `${styles.sidebarWrapper} ${isSidebarOpen ? styles.activeIsSidebar:""}`
    }>
        {
        sidebarData?.map(({ title, lists }, sidebarIndex) => {
            if (title === "구독" && (!lists || lists.length === 0)) return null;
            return (
            <div className={styles.sidebarGroup} key={sidebarIndex}>
                {title && <h2 className={styles.sidebarGroupTitle}>{title}</h2>}
                <ul className={styles.sidebarGroupUl}>
                {lists?.map(({ text, link, icon }, listIndex) => {
                    const isActivePathname = link === pathname;
                    return (
                    <SidebarList
                        key={listIndex}
                        link={link}
                        isActivePathname={isActivePathname}
                        icon={icon}
                        text={text}
                        isSidebarOpen={isSidebarOpen}
                    />
                    );
                })}
                </ul>
            </div>
            );
        })
        }
    </aside>
  );
};


export default SidebarContainer;
