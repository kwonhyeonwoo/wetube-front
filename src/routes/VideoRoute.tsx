import { Route, Routes } from "react-router-dom";
import VideoStoragePage from "@/pages/video/VideoStorage/VideoStoragePage";
import VideoDetailContainer from "@/pages/video/VideoDetail/container/VideoDetailContainer";
import VideoEditContainer from "@/pages/video/VideoEdit/container/VideoEditContainer";
import VideoWriteContainer from "@/pages/video/VideoWrite/container/VideoWriteContainer";

const routes = [
  {
    path: "/write",
    element: <VideoWriteContainer />,
  },
  {
    path: "/:id",
    element: <VideoDetailContainer />,
  },
  {
    path: "/:id/edit",
    element: <VideoEditContainer />,
  },
  {
    path: "/:id/storage",
    element: <VideoStoragePage />,
  },
];

const VideoRoute = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, idx) => (
        <Route key={idx} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default VideoRoute;
