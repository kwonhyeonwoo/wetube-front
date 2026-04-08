import { useCallback } from 'react'
import { useAccountMutation } from '@/hooks/queries/auth/useAccountMutation';
import AuthPageTemplate from '@/components/auth/AuthPageTemplate/AuthPageTemplate';
import { ACCOUNT_FIELDS } from '@/constants/authConstants';
import { useToastStore } from '@/store/useToastStore';
import { useForm } from 'react-hook-form';
import type { AccountRequest,  } from '@/interfaces/auth.type';

const AccountContainer = () => {
  const {addToast} = useToastStore();
  const {mutate:account} = useAccountMutation();
   const {register,handleSubmit} = useForm<AccountRequest>();
  const onSubmit = useCallback(
    (data: AccountRequest) => {
      if(data.password !== data.confirmPassword){
        return addToast('비밀번호가 일치하지 않습니다.')
      }
      account(data);
    },
    [account],
  )
  
  return (
    <AuthPageTemplate
      title={"계정 만들기"}
      subTitle={`The Redacted Minimalist의 일원이 되어
간결하고 명확한 컨텐츠를 경험하세요.`}
      fields={ACCOUNT_FIELDS}
      link={"/user/login"}
      linkText={"이미 계정이 있으신가요?"}
      btnText="회원가입"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default AccountContainer