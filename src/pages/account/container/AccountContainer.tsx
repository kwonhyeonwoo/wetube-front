import { useCallback } from 'react'
import Account from '../Account'
import { useForm } from '../../../hooks/useForm'

const AccountContainer = () => {
  const {inputs,handleChange} = useForm({
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