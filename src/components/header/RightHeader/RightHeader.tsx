import type { IUserMe } from "@/interfaces/auth.type";
import GuestActions from "../GuestActions/GuestActions";
import UserActions from "../UserActions/UserActions";

interface Props {
  user?: IUserMe;
}
const RightHeader = ({user}:Props) => {
  console.log('right header',user)
  return (
    <>
      {user ? <UserActions user={user}/> : <GuestActions/>}
    </>
  )
}

export default RightHeader