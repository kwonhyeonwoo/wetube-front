import { Route, Routes } from "react-router-dom"
import AccountContainer from "../pages/account/container/AccountContainer"
import LoginContainer from "../pages/login/container/LoginContainer"
import ProfileContainer from "../pages/profile/container/ProfileContainer"
import ProfileEditContainer from "@/pages/profileEdit/container/ProfileEditContainer"
import MyVideosContainer from "@/pages/MyVideos/container/MyVidoesContainer"
import VideoStorageContainer from "@/pages/VideoStorage/container/VideoStorageContainer"
import StorageDetailContainer from "@/pages/StorageDetail/container/StorageDetailContainer"

const routes = [
    {
        path:"/account",
        element:<AccountContainer/>
    },
    {
        path:"/login",
        element:<LoginContainer/>
    },
    {
        path:"/:id",
        element:<ProfileContainer/>
    },
    {
        path:"/:id/edit",
        element:<ProfileEditContainer/>
    },
    {
        path:"/:id/videos",
        element:<MyVideosContainer/>
    },
    {
        path:"/:id/storage",
        element:<VideoStorageContainer/>
    },
    {
        path:"/:userId/storage/:storageId",
        element:<StorageDetailContainer/>
    }
]

const UserRoute = () => {
  return (
    <Routes>
        {routes.map(({path,element},idx)=>(
            <Route key={idx} path={path} element={element}/>
        ))}
    </Routes>
  )
}

export default UserRoute