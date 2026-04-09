import type { SessionUser } from "@/interfaces/auth.type";
import { create } from "zustand";

interface UserState {
  user: SessionUser;
  isLoggedIn: boolean;
  setUser: (user: SessionUser,status:boolean) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {
    uid: "",
    profile: "",
    nickName: "",
    email: "",
    name:""
  },
  isLoggedIn: false,
  setUser: (user,status) =>
    set(() => ({
        user,
        isLoggedIn:status
    })),
}));

export default useUserStore;