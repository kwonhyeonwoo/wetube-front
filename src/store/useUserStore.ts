import { create } from "zustand";

interface UserState{
    isLoggedIn:boolean;
    uid:string | null;
    setUser:(login:boolean,uid:string)=>void;
}

const useUserStore = create<UserState>((set) => ({
    isLoggedIn:false,
    uid:null,
    setUser:(login,uid)=>set(()=>({
        isLoggedIn:login,
        uid,
    }))
}));

export default useUserStore;