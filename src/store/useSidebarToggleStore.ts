import { create } from "zustand";

interface ToggleStore{
    isSidebarOpen:boolean;
    setSidebarToggle:()=>void;
}

const useSidebarToggleStore = create<ToggleStore>((set)=>({
    isSidebarOpen:false,
    setSidebarToggle:()=>set((state)=>({
        isSidebarOpen:!state.isSidebarOpen
    }))
}));

export const useSidebarIsOpen = () => useSidebarToggleStore((state) => state.isSidebarOpen);
export const useSidebarSetToggle = () => useSidebarToggleStore((state) => state.setSidebarToggle);