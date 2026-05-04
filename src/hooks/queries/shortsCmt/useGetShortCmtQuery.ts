import { SHORTS_CMT_KEYS } from "@/apis/shortsCmt/shortsCmtKeys"
import { shortsCmtService } from "@/apis/shortsCmt/shortsCmtService"
import { useQuery } from "@tanstack/react-query"

export const useGetShortCmtQuery=(shortsId:string)=>{
    return useQuery({
      queryKey: SHORTS_CMT_KEYS.list(),
      queryFn: () => shortsCmtService.getShortsCmt(shortsId),
    });
}