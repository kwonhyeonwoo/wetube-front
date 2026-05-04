import { create } from "zustand";

interface ShortsCmtStore{
    commentId:string | null;
    setCommentId:(commentId:string)=>void;
}

const useShortsCmtStore = create<ShortsCmtStore>((set)=>({
    commentId:null,
    setCommentId:(commentId:string)=>set((state)=>({
        commentId
    }))
}));

export const useShortsCmtId =()=> useShortsCmtStore((state)=>state.commentId);
export const useShortsSetCmtId = ()=>useShortsCmtStore((state)=>state.setCommentId);