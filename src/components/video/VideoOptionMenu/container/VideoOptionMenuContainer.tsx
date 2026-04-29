import { useCallback, useState } from "react"
import VideoOptionMenu from "../VideoOptionMenu"
import { useNavigate } from "react-router-dom";
import useDeleteVideoMutation from "@/hooks/mutations/video/useDeleteVideoMutation";

interface Props{
  videoId:string;
}

const VideoOptionMenuContainer = ({videoId}:Props) => {
  const navigate = useNavigate();
  const {mutate}= useDeleteVideoMutation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 
  const handleMenuOpen = useCallback(
    () => {
      setIsMenuOpen((prev)=>!prev);
    },
    [],
  );
  const handleOptionActive = useCallback(
    (type:"edit" | "delete") => {
      if(type === 'edit'){
        return navigate(`/video/${videoId}/edit`);
      }else{
        setIsMenuOpen(false);
        mutate(videoId)
      }
    },
    [],
  )
  return (
    <VideoOptionMenu
      isMenuOpen={isMenuOpen}
      handleMenuOpen={handleMenuOpen}
      handleOptionActive={handleOptionActive}
    />
  )
}

export default VideoOptionMenuContainer