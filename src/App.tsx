import { Route, Routes } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import VideoRoute from './routes/VideoRoute';
import UserRoute from './routes/UserRoute';
import HeaderContainer from './components/common/header/container/HeaderContainer';
import { Fragment } from 'react/jsx-runtime';

const routes = [
  {
    path:"/",
    element:<RootRoute/>
  },
  {
    path:"/video/*",
    Element:<VideoRoute/>
  },
  {
    path:"/user/*",
    element:<UserRoute/>
  }
]
function App() {
  return (
   <Fragment>
    <HeaderContainer/>
    <Routes>
    {routes.map(({path,element},idx)=>(
      <Route key={idx} path={path} element={element}/>
    ))}
   </Routes>
   </Fragment>
  )
}

export default App
