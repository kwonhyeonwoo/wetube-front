import { Route, Routes } from 'react-router-dom'
import HomeContainer from '../pages/home/container/HomeContainer'
import SearchContainer from '@/pages/Search/container/SearchContainer'

const routes = [
  {
    path:"/",
    element:<HomeContainer/>,
  },
  {
    path:'/search',
    element:<SearchContainer/>
  }

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