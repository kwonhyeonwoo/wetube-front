import { Route, Routes } from "react-router-dom"
import AccountContainer from "../pages/account/container/AccountContainer"
import LoginContainer from "../pages/login/container/LoginContainer"
import ProfileContainer from "../pages/profile/container/ProfileContainer"

const routes = [
    {
        path:"/account",
        element:<AccountContainer/>
    },
    {
        path:"/login",
        element:<LoginContainer/>
    },
    {
        path:"/:id",
        element:<ProfileContainer/>
    }
]

const UserRoute = () => {
  return (
    <Routes>
        {routes.map(({path,element},idx)=>(
            <Route key={idx} path={path} element={element}/>
        ))}
    </Routes>
  )
}

export default UserRoute