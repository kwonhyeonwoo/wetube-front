import { Route, Routes } from "react-router-dom"
import WriteVideoContainer from "../pages/writeVideo/container/WriteVideoContainer"
import VideoHistoryContainer from "@/pages/VideoHistory/container/VideoHistoryContainer"
import VideoDetailContainer from "@/pages/VideoDetail/container/VideoDetailContainer"

const routes = [
    {
        path:"/write",
        element:<WriteVideoContainer/>
    },
    {
      path:"/history",
      element:<VideoHistoryContainer/>
    },
    {
      path:"/:id",
      element:<VideoDetailContainer/>
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