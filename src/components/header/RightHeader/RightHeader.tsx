import type { SessionUser } from "@/interfaces/auth.type";
import GuestActions from "../GuestActions/GuestActions";
import UserActions from "../UserActions/UserActions";

interface Props {
  user: SessionUser;
}
const RightHeader = ({user}:Props) => {
  return (
    <>
      {user.uid ? <UserActions user={user}/> : <GuestActions/>}
    </>
  )
}

export default RightHeader