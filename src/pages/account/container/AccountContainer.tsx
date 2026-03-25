import { useCallback, useState } from 'react'
import Account from '../Account'
import type { IAccount } from 'auth'

const AccountContainer = () => {
  const [inputs, setInputs] = useState<IAccount>({
    name:"",
    email:"",
    password:"",
    nickName:"",
    confirmPassword:"",
  })

  const handleChange = useCallback(
    (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name,value} = e.target;
      setInputs((prev)=>({
        ...prev,
        [name]:value,
      }))
      
    },
    [],
  );

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