import usePostFollow from "@/hooks/mutations/auth/useFollowingMutation";
import { useNavigate } from "react-router-dom";


const useProfileAction = (id?:string)=>{
    const navigate = useNavigate();
    const { mutate :followingMutate} = usePostFollow(id ?? "");

    const handleCategoryAction = (uid:string,path:string)=> {
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
      handleCategoryAction,
      handleProfileAction,
    };
};

export default useProfileAction;