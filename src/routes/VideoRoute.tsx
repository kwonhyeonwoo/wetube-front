import { Route, Routes } from "react-router-dom"
import WriteVideoContainer from "../pages/writeVideo/container/WriteVideoContainer"
import VideoHistoryContainer from "@/pages/VideoHistory/container/VideoHistoryContainer"

const routes = [
    {
        path:"/write",
        element:<WriteVideoContainer/>
    },
    {
      path:"/history",
      element:<VideoHistoryContainer/>
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