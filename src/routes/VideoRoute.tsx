import { Route, Routes } from "react-router-dom"
import VideoDetailPage from "@/pages/video/VideoDetail/VideoDetailPage"
import VideoEditPage from "@/pages/video/VideoEdit/VideoEditPage"
import VideoWritePage from "../pages/video/VideoWrite/VideoWritePage"
import VideoStoragePage from "@/pages/video/VideoStorage/VideoStoragePage"

const routes = [
    {
        path:"/write",
        element:<VideoWritePage/>
    },
    {
      path:"/:id",
      element:<VideoDetailPage/>
    },
    {
      path:'/:id/edit',
      element:<VideoEditPage/>
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