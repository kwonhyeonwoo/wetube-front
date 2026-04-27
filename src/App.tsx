import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import VideoRoute from "./routes/VideoRoute";
import UserRoute from "./routes/UserRoute";
import HeaderContainer from "./components/layouts/header/container/HeaderContainer";
import { Fragment } from "react/jsx-runtime";
import SidebarContainer from "./components/layouts/Sidebar/container/SidebarContainer";
import { useEffect } from "react";
import { ToastContainer } from "./components/common/ToastMessage/container/ToastMessageContainer";
import { useGetMe } from "./hooks/queries/auth/useGetMe";
import ShortRoute from "./routes/ShortRoute";
import { useUidStore } from "./store/useUserStore";

const routes = [
  { path: "/*", element: <RootRoute /> },
  { path: "/video/*", element: <VideoRoute /> },
  { path: "/user/*", element: <UserRoute /> },
  { path: "/shorts/*", element: <ShortRoute /> },
];

function App() {
  const { pathname } = useLocation();
  const { data } = useGetMe();
  const uid = useUidStore();
  console.log('uid',uid)
  // const { setUser ,uid} = useUserStore();
  const hideSidebar = /^\/video\/[^/]+$/.test(pathname);
  // useEffect(() => {
  //   if (!data) return;
  //   setUser(data.uid, true);
  // }, [data, setUser]);
  return (
    <Fragment>
      <HeaderContainer user={data} />
      {!hideSidebar &&
        pathname !== "/user/login" &&
        pathname !== "/user/account" && <SidebarContainer uid={uid} />}
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
