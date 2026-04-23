import { useRoutes } from "react-router-dom"
import AccountContainer from "../pages/account/container/AccountContainer"
import LoginContainer from "../pages/login/container/LoginContainer"
import ProfileEditContainer from "@/pages/profileEdit/container/ProfileEditContainer"
import MyVideosContainer from "@/pages/MyVideos/container/MyVidoesContainer"
import StorageDetailContainer from "@/pages/StorageDetail/container/StorageDetailContainer"
import WriteStorageContainer from "@/pages/writeStorage/container/WriteStorageContainer"
import ProfileLayout from "@/pages/profile/container/ProfileLayout"
import ProfileFeatureContainer from "@/pages/profile/ProfileFeature/container/ProfileFeatureContainer"

const routes = [
  {
    path: "/account",
    element: <AccountContainer />,
  },
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/:id/:tab",
    element: <ProfileLayout />,
    children: [{ path: "", element: <ProfileFeatureContainer /> }],
  },
  {
    path: "/:id/edit",
    element: <ProfileEditContainer />,
  },
  {
    path: "/:id/videos",
    element: <MyVideosContainer />,
  },
  {
    path: "/:userId/storage/:storageId",
    element: <StorageDetailContainer />,
  },
  {
    path: "/storage/write",
    element: <WriteStorageContainer />,
  },
];
const UserRoute = () => {
    const element = useRoutes(routes);
    return element
}

export default UserRoute