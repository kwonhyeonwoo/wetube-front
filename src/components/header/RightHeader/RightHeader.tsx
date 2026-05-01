import type { UserResponse } from "@/interfaces/auth.type";
import GuestActions from "../GuestActions/GuestActions";
import UserActions from "../UserActions/UserActions";

interface Props {
  user?: UserResponse;
  handleLogOut: () => void;
}
const RightHeader = ({ user, handleLogOut }: Props) => {
  return (
    <>
      {user ? (
        <UserActions user={user} handleLogOut={handleLogOut} />
      ) : (
        <GuestActions />
      )}
    </>
  );
};

export default RightHeader;
