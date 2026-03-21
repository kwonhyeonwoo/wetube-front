import { Route, Routes } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import VideoRoute from './routes/VideoRoute';
import UserRoute from './routes/UserRoute';

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
   <Routes>
    {routes.map(({path,element},idx)=>(
      <Route key={idx} path={path} element={element}/>
    ))}
   </Routes>
  )
}

export default App
