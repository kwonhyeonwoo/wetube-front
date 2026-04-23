import { Route, Routes, useRoutes } from 'react-router-dom'
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
  const rootElement = useRoutes(routes)
  return rootElement;
}

export default RootRoute