import ShortContainer from "@/pages/Short/container/ShortContainer"
import WriteShortContainer from "@/pages/writeShort/container/WriteShortContainer"
import {useRoutes } from "react-router-dom"

const shortRoutes=[
    {
        path:"/",
        element:<ShortContainer/>
    },
    {
        path:"/write",
        element:<WriteShortContainer/>
    }
]

const ShortRoute = () => {
    const shortElement = useRoutes(shortRoutes)
  return shortElement;
}

export default ShortRoute