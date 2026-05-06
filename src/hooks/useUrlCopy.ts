import { useToastStore } from "@/store/useToastStore"

export const useUrlCopy = ()=>{
    const {addToast} = useToastStore();
    const handleCopyUrl = ()=>{
        navigator.clipboard.writeText(window.location.href);
        addToast('주소가 복사되었습니다.')
    }

    return { handleCopyUrl}
}
