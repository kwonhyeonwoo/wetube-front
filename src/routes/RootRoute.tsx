import { Route, Routes } from 'react-router-dom'
import HomeContainer from '../pages/home/container/HomeContainer'

const routes = [
  {
    path:"/",
    element:<HomeContainer/>
  },

]

const RootRoute = () => {
  return (
    <Routes>
        {routes.map(({path,element},idx)=>(
        <Route key={idx} path={path} element={element}/>
        ))}
    </Routes>
  )
}

export default RootRoute