import { Route, Routes, useLocation } from "react-router-dom";
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
import { ClipLoader } from "react-spinners";
import ShortRoute from "./routes/ShortRoute";

const routes = [
  { path: "/*", element: <RootRoute /> },
  { path: "/video/*", element: <VideoRoute /> },
  { path: "/user/*", element: <UserRoute /> },
  { path: "/shorts/*", element: <ShortRoute /> },
];

function App() {
  const { pathname } = useLocation();

  // 1. 딱 /video/12345 형태일 때만 true가 되는 치트키 정규식
  const hideSidebar = /^\/video\/[^/]+$/.test(pathname);

  const { data, isLoading } = useGetMe();
  const { setUser } = useUserStore();

  useEffect(() => {
    if (!data) return;
    setUser(data.user, data.status);
  }, [data, setUser]);

  // 🚨 보너스 수정: 로딩 중일 때는 반드시 return을 해줘야 화면에 스피너가 나옵니다!
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader
          color={"#E60000"}
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <Fragment>
      <HeaderContainer />

      {/* 2. 상세페이지가 아닐 때만(!) 사이드바 렌더링! (isSidebar 앞의 느낌표 제거함) */}
      {!hideSidebar && <SidebarContainer />}

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
