import { useCallback,} from 'react'
import Login from '../Login'
import { useForm } from '../../../hooks/useForm'
import { useLoginMutation } from '../../../hooks/queries/auth/useLoginMutation'

const LoginContainer = () => {
  const {mutate:login , isError, error} = useLoginMutation();
  const {inputs,handleChange} = useForm({email:"",password:""})
  
  const handleSubmit = useCallback(
    () => {
      login(inputs);
      
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
