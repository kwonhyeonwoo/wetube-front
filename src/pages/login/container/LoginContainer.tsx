import { useCallback,} from 'react'
import Login from '../Login'
import { useForm } from '../../../hooks/useForm'

const LoginContainer = () => {
  const {inputs,handleChange} = useForm({email:"",password:""})
  
  const handleSubmit = useCallback(
    () => {
     console.log('inputs',inputs) 
    },
    [inputs],
  )
  
  return (
    <Login 
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default LoginContainer
