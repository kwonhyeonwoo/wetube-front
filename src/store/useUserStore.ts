import { create } from "zustand";

interface UserState{
    isLoggedIn:boolean;
    setLoggedIn:(login:boolean)=>void;
}

const useUserStore = create<UserState>((set) => ({
    isLoggedIn:false,
    setLoggedIn:(login)=>set(()=>({
        isLoggedIn:login
    }))
}));

export default useUserStore;