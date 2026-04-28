import { SHORTS_KEYS } from '@/apis/shorts/shortsKeys'
import { shortsService } from '@/apis/shorts/shortsService'
import { useToastStore } from '@/store/useToastStore'
import { useSetUserAction } from '@/store/useUserStore'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

const usePostShortMutation = () => {
  const navigate = useNavigate();
  const uid = useSetUserAction();
  const { addToast } = useToastStore();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: shortsService.postShorts,
    onSuccess: (data) => {
      console.log('shorts data->',data);
      queryClient.invalidateQueries({ queryKey: SHORTS_KEYS.all });
      addToast('쇼츠를 생성하였습니다.')
      navigate(`/user/${uid}/videos`)
    },
    onError: (error: any) => {
      const message = error.message ? error.message : "서버 에러"
      addToast(message);
    }
  })
  return mutation;
}

export default usePostShortMutation