import { useCallback,} from 'react'
import { useAuthForm } from "../../../hooks/useAuthForm";
import { useLoginMutation } from '../../../hooks/queries/auth/useLoginMutation'
import AuthPageTemplate from '@/components/auth/AuthPageTemplate/AuthPageTemplate'
import { LOGIN_FIELDS } from '@/constants/authConstants'

const LoginContainer = () => {
  const {mutate:login , isError, error} = useLoginMutation();
  const { inputs, handleChange } = useAuthForm({ email: "", password: "" });
  
  const handleSubmit = useCallback(
    () => {
      login(inputs);
      
    },
    [inputs],
  )
  
  return (
    <AuthPageTemplate
      title="로그인"
      fields={LOGIN_FIELDS}
      link="/user/account"
      linkText="계정이 없으신가요?"
      btnText="로그인"
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginContainer
