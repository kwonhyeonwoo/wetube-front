import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccountMutation } from '@/hooks/queries/auth/useAccountMutation';
import Account from '../Account';
import { useAuthForm } from '@/hooks/useAuthForm';

const AccountContainer = () => {
  const navigate = useNavigate();
  const {mutate:account} = useAccountMutation();
  const {inputs,handleChange} = useAuthForm({
    name: "",
    email: "",
    password: "",
    nickName: "",
    confirmPassword: "",
  });

  const handleSubmit = useCallback(
    () => {
      const {password,confirmPassword} = inputs;
      if(password!==confirmPassword){
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      account(inputs,{
        onSuccess:()=>{
          navigate('/user/login')
        }
      })
      console.log(inputs)
    },
    [inputs],
  )
  
  return (
    <Account
    inputs={inputs}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    />
  )
}

export default AccountContainer