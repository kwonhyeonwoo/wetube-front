import { Route, Routes, useLocation } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import VideoRoute from './routes/VideoRoute';
import UserRoute from './routes/UserRoute';
import HeaderContainer from './components/layouts/header/container/HeaderContainer';
import { Fragment } from 'react/jsx-runtime';
import SidebarContainer from './components/layouts/Sidebar/container/SidebarContainer';
import useUserStore from './store/useUserStore';
import { useEffect } from 'react';

const routes = [
  {
    path:"/",
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
]
function App() {
  const {pathname} = useLocation();
  const isSidebar = pathname.includes('/user/login') || pathname.includes('/user/account')
  const {isLoggedIn,setLoggedIn} = useUserStore();
  useEffect(()=>{
    setLoggedIn(false);
  },[])
  return (
    <Fragment>
      <HeaderContainer />
      {!isSidebar &&<SidebarContainer />}
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
      </Routes>
    </Fragment>
  );
}

export default App
