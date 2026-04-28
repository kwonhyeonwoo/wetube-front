import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import VideoRoute from "./routes/VideoRoute";
import UserRoute from "./routes/UserRoute";
import HeaderContainer from "./components/layouts/header/container/HeaderContainer";
import { Fragment } from "react/jsx-runtime";
import SidebarContainer from "./components/layouts/Sidebar/container/SidebarContainer";
import { ToastContainer } from "./components/common/ToastMessage/container/ToastMessageContainer";
import ShortRoute from "./routes/ShortRoute";

const routes = [
  { path: "/*", element: <RootRoute /> },
  { path: "/video/*", element: <VideoRoute /> },
  { path: "/user/*", element: <UserRoute /> },
  { path: "/shorts/*", element: <ShortRoute /> },
];

function App() {
  const { pathname } = useLocation();
  const hideSidebar = /^\/video\/[^/]+$/.test(pathname);
  return (
    <Fragment>
      <HeaderContainer  />
      {!hideSidebar &&
        pathname !== "/user/login" &&
        pathname !== "/user/account" && <SidebarContainer />}
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
