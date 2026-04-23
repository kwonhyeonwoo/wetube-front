import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import VideoRoute from "./routes/VideoRoute";
import UserRoute from "./routes/UserRoute";
import HeaderContainer from "./components/layouts/header/container/HeaderContainer";
import { Fragment } from "react/jsx-runtime";
import SidebarContainer from "./components/layouts/Sidebar/container/SidebarContainer";
import useUserStore from "./store/useUserStore";
import { useEffect } from "react";
import { ToastContainer } from "./components/common/ToastMessage/container/ToastMessageContainer";
import { useGetMe } from "./hooks/queries/auth/useGetMe";
import ShortRoute from "./routes/ShortRoute";

const routes = [
  { path: "/*", element: <RootRoute /> },
  { path: "/video/*", element: <VideoRoute /> },
  { path: "/user/*", element: <UserRoute /> },
  { path: "/shorts/*", element: <ShortRoute /> },
];

function App() {
  const { pathname } = useLocation()
  const { data } = useGetMe();
  const { setUser ,user} = useUserStore();
  const hideSidebar = /^\/video\/[^/]+$/.test(pathname);
  useEffect(() => {
    if (!data) return;
    setUser(data.user, data.status);
  }, [data, setUser]);
  return (
    <Fragment>
      <HeaderContainer user={user} />
      {!hideSidebar && <SidebarContainer uid={user.uid} />}
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
