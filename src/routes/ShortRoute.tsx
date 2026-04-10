import ShortContainer from "@/pages/Short/container/ShortContainer"
import WriteShortContainer from "@/pages/writeShort/container/WriteShortContainer"
import { Route, Routes } from "react-router-dom"

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
  return (
    <Routes>
        {shortRoutes.map(({path,element},idx)=>(
            <Route path={path} element={element} key={idx}/>
        ))}
    </Routes>
  )
}

export default ShortRoute