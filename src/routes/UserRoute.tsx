import { useRoutes } from "react-router-dom"
import AccountContainer from "../pages/user/AccountContainer"
import LoginContainer from "../pages/user/LoginContainer"
import ProfileEditContainer from "@/pages/profileEdit/container/ProfileEditContainer"
import ProfileLayout from "@/pages/profile/container/ProfileLayout"
import ProfileFeatureContainer from "@/pages/profile/ProfileFeature/container/ProfileFeatureContainer"
import MyVideoContainer from "@/pages/profile/MyVideo/container/MyVideoContainer";
import ProfileShortsContainer from "@/pages/profile/ProfileShorts/container/ProfileShortsContainer";

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
    path: "/:id",
    element: <ProfileLayout />,
    children: [
      { path: "featured", element: <ProfileFeatureContainer /> },
      { path: "videos", element: <MyVideoContainer /> },
      { path: "shorts", element: <ProfileShortsContainer /> },
    ],
  },
  {
    path: "/:id/edit",
    element: <ProfileEditContainer />,
  },
];
const UserRoute = () => {
    const element = useRoutes(routes);
    return element
}

export default UserRoute