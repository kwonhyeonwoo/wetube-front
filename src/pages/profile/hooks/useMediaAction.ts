import { useNavigate } from "react-router-dom";

const useMediaAction = ()=>{
    const navigate = useNavigate();

    const handleMediaAction = (videoId:string)=> navigate(`/video/${videoId}`);
    
    return {
        handleMediaAction,
    }

};

export default useMediaAction;