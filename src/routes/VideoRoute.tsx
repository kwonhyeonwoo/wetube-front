import { Route, Routes } from "react-router-dom"
import WriteVideoContainer from "../pages/writeVideo/container/WriteVideoContainer"
import VideoHistoryContainer from "@/pages/VideoHistory/container/VideoHistoryContainer"
import VideoDetailContainer from "@/pages/VideoDetail/container/VideoDetailContainer"
import VideoEditContainer from "@/pages/VideoEdit/container/VideoEditContainer"

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
    },
    {
      path:'/:id/edit',
      element:<VideoEditContainer/>
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