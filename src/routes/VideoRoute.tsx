import { Route, Routes } from "react-router-dom"
import VideoWritePage from "../pages/video/VideoWrite/VideoWritePage"
import VideoStoragePage from "@/pages/video/VideoStorage/VideoStoragePage"
import VideoDetailContainer from "@/pages/video/VideoDetail/container/VideoDetailContainer"
import VideoEditContainer from "@/pages/video/VideoEdit/container/VideoEditContainer";

const routes = [
    {
        path:"/write",
        element:<VideoWritePage/>
    },
    {
      path:"/:id",
      element:<VideoDetailContainer/>
    },
    {
      path:'/:id/edit',
      element:<VideoEditContainer/>
    },
    {
      path:"/:id/storage",
      element:<VideoStoragePage/>
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