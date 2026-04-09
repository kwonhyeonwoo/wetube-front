import { useCallback,} from 'react'
import { useLoginMutation } from '../../../hooks/queries/auth/useLoginMutation'
import AuthPageTemplate from '@/components/auth/AuthPageTemplate/AuthPageTemplate'
import { LOGIN_FIELDS } from '@/constants/authConstants'
import { useForm } from 'react-hook-form';
import type { LoginRequest } from '@/interfaces/auth.type';

const LoginContainer = () => {
  const {mutate:login , } = useLoginMutation();
  const {register,handleSubmit} = useForm<LoginRequest>();
  
  const onSubmit = useCallback(
    (data:LoginRequest) => {
      console.log('data',data)
      login(data);
    },
    [login],
  )
  
  return (
    <AuthPageTemplate
      title="로그인"
      fields={LOGIN_FIELDS}
      link="/user/account"
      linkText="계정이 없으신가요?"
      btnText="로그인"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
}

export default LoginContainer
