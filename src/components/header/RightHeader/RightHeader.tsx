import GuestActions from "../GuestActions/GuestActions";
import UserActions from "../UserActions/UserActions";

interface Props{
  isLogin:boolean;
}
const RightHeader = ({isLogin}:Props) => {
  console.log('isLogin',isLogin)
  return (
    <>
      {isLogin ? <UserActions/> : <GuestActions/>}
    </>
  )
}

export default RightHeader