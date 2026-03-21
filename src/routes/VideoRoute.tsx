import { Route, Routes } from "react-router-dom"
import WriteVideoContainer from "../pages/writeVideo/container/WriteVideoContainer"

const routes = [
    {
        path:"/",
        element:<WriteVideoContainer/>
    }
]

const VideoRoute = () => {
  return (
    <Routes>
        {routes.map(({path,element},idx)=>(
            <Route key={idx} path={path} element={element}/>
        ))}
    </Routes>
  )
}

export default VideoRoute