import { Route, Routes } from 'react-router-dom'
import SearchContainer from '@/pages/Search/container/SearchContainer'
import HomePage from '@/pages/home/HomePage'

const routes = [
  {
    path:"/",
    element:<HomePage/>,
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