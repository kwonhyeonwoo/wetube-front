import { matchPath, Route, Routes, useLocation, useParams } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import VideoRoute from './routes/VideoRoute';
import UserRoute from './routes/UserRoute';
import HeaderContainer from './components/layouts/header/container/HeaderContainer';
import { Fragment } from 'react/jsx-runtime';
import SidebarContainer from './components/layouts/Sidebar/container/SidebarContainer';
import useUserStore from './store/useUserStore';
import { useEffect } from 'react';
import { ToastContainer } from './components/common/ToastMessage/container/ToastMessageContainer';
import { useGetMe } from './hooks/queries/auth/useGetMe';
import { ClipLoader } from 'react-spinners';
import ShortRoute from './routes/ShortRoute';

const routes = [
  {
    path:"/*",
    element:<RootRoute/>
  },
  {
    path:"/video/*",
    element:<VideoRoute/>
  },
  {
    path:"/user/*",
    element:<UserRoute/>
  },
  {
    path:"/shorts/*",
    element:<ShortRoute/>
  }
]
function App() {
  const {pathname} = useLocation();
  const isVideoDetail = matchPath("/video/:id", pathname);
  const isSidebar =
    pathname.includes("/user/login") ||
    pathname.includes("/user/account") ||
    pathname.includes("/video") ||
    isVideoDetail;

  const {data,isLoading} = useGetMe();
  const {setUser} = useUserStore();
  useEffect(()=>{
    if(!data){
      return ;
    }
    setUser(data.user,data.status);
    
  },[data,setUser]);
  if(isLoading){
    <ClipLoader 
      color={"#E60000"} 
      loading={isLoading}
      size={150}
      aria-lagel="Loading Spinner"
      data-testId="loader"
    />;
  }
  return (
    <Fragment>
      <HeaderContainer />
      {!isSidebar &&<SidebarContainer />}
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
      <ToastContainer/>
    </Fragment>
  );
}

export default App
