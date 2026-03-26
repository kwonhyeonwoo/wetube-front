import React, { useMemo } from 'react'
import Sidebar from '../Sidebar'
import { getSidebarContents } from '../../../constants/sidebarConstants'
import type { ISubscription } from 'sidebar';

const SidebarContainer = () => {
    const sidebarData = useMemo(() => getSidebarContents(getTestData), [getTestData])
  return (
    <Sidebar sidebarData={sidebarData}/>
  )
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