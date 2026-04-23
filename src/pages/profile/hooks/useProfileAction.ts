import usePostFollow from "@/hooks/queries/auth/usePostFollow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const useProfileAction = (id?:string)=>{
    const navigate = useNavigate();
    const [currentCategory, setCurrentCategory] = useState<string>("");
    const { mutate :followingMutate} = usePostFollow(id ?? "");

    const handleCategoryAction = (uid:string,path:string)=> {
        setCurrentCategory(path);
        navigate(`/user/${uid}/${path}`);
    }

    const handleProfileAction = (type:"edit" | "following",uid?:string)=>{
        if(type === 'edit'){
            return navigate(`/user/${uid}/edit`)
        }else{
            return followingMutate(uid ?? "")
        }
    }   
    return {
      currentCategory,
      handleCategoryAction,
      handleProfileAction,
    };
};

export default useProfileAction;