import useFollowingMutation from "@/hooks/mutations/auth/useFollowingMutation";

export const useFollow = ({videoId,ownerId}:{videoId:string, ownerId:string})=>{
    const { mutate } = useFollowingMutation(videoId ?? "");
    const handleFollow = () => {
      if (ownerId) {
        mutate(ownerId);
      }
    };
    return { handleFollow}
}