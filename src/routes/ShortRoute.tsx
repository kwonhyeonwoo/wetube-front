import ShortContainer from "@/pages/short/Shorts/container/ShortContainer";
import ShortWriteContainer from "@/pages/short/ShortWrite/container/ShortWriteContainer";
import { useRoutes } from "react-router-dom";

const shortRoutes = [
  {
    path: "/",
    element: <ShortContainer />,
  },
  {
    path: "/:shortsId",
    element: <ShortContainer />,
  },
  {
    path: "/write",
    element: <ShortWriteContainer />,
  },
];

const ShortRoute = () => {
  const shortElement = useRoutes(shortRoutes);
  return shortElement;
};

export default ShortRoute;
