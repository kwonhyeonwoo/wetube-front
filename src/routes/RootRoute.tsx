import { useRoutes } from 'react-router-dom'
import SearchContainer from '@/pages/Search/container/SearchContainer'
import HomeContainer from '@/pages/home/container/HomeContainer';
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
  const rootElement = useRoutes(routes)
  return rootElement;
}

export default RootRoute