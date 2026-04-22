import { Route, Routes } from "react-router-dom"
import AccountContainer from "../pages/account/container/AccountContainer"
import LoginContainer from "../pages/login/container/LoginContainer"
import ProfileEditContainer from "@/pages/profileEdit/container/ProfileEditContainer"
import MyVideosContainer from "@/pages/MyVideos/container/MyVidoesContainer"
import StorageDetailContainer from "@/pages/StorageDetail/container/StorageDetailContainer"
import WriteStorageContainer from "@/pages/writeStorage/container/WriteStorageContainer"
import ProfilePage from "@/pages/profile/ProfilePage"

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
        element:<ProfilePage/>
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
        path:"/:userId/storage/:storageId",
        element:<StorageDetailContainer/>
    },
    {
        path:"/storage/write",
        element:<WriteStorageContainer/>
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