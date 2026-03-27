import  { useMemo } from 'react'
import Sidebar from '../Sidebar'
import { getSidebarContents } from '../../../constants/sidebarConstants'
import type { ISubscription } from 'sidebar';
import { useLocation } from 'react-router-dom';

const SidebarContainer = () => {
    const {pathname} = useLocation();
    const sidebarData = useMemo(() => getSidebarContents(getTestData), [getTestData]);
  return <Sidebar pathname={pathname} sidebarData={sidebarData} />;
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