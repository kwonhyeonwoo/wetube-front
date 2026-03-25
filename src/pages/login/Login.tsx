import type { ILogin } from "auth";
import "./css/index.css";
import AuthPageTemplate from "../../components/auth/AuthPageTemplate/AuthPageTemplate";
import { LOGIN_FIELDS } from "../../constants/authConstants";

interface Props{
  inputs:ILogin;
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit:()=>void;
}
const Login = ({
  inputs,
  handleChange,
  handleSubmit
}:Props) => {
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

export default Login