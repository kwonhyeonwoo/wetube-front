import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  uid:string;
  setUser: (uid: string) => void;
}

const useUserStore = create(
  persist<UserState>(
    (set)=>({
      uid:"",
      setUser:(uid,)=>{
        if(uid){
           set({ uid,});
        }
      }
    }),
    {
      name: "user-store",
    }
  )
)

export const useSetUserAction = ()=>useUserStore((state)=>state.setUser);
export const useUidStore =()=> useUserStore((state)=>state.uid);