import { Link } from "react-router-dom";
import AuthInputContainer from "../../components/common/authInput/container/AuthInputContainer";
import SubmitButtonContainer from "../../components/common/SubmitButton/container/SubmitButtonContainer";
import "./css/index.css";
import type { IAccount } from 'auth';

interface Props{
  inputs:IAccount;
  handleSubmit:()=>void;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Account = ({
  inputs:{
    name,
    email,
    nickName,
    password,
    confirmPassword},
    handleChange,
    handleSubmit}:Props) => {
  const ACCOUNT_FIELDS=[
    {
      name:"name",
      value:name,
      label:"이름",
      placeholder:"이름",
      type:"text"
    },
    {
      name:"email",
      value:email,
      label:"이메일",
      placeholder:"이메일",
      type:"email"
    },
    {
      name:"nickName",
      value:nickName,
      label:"닉네임",
      placeholder:"닉네임",
      type:"text"
    },
    {
      name:"password",
      value:password,
      label:"비밀번호",
      placeholder:"비밀번호",
      type:"password"
    },
    {
      name:"confirmPassword",
      value:confirmPassword,
      label:"비밀번호 확인",
      placeholder:"비밀번호 확인",
      type:"password"
    }
  ]
  return (
    <main className="account-page">
      <section className="account-page-section">
        <div className="account-page-section-title">
          <h1 className="account-page-section-title-title">회원가입</h1>
          <p className="account-page-section-title-sub">{`The Redacted Minimalist의 일원이 되어
간결하고 명확한 컨텐츠를 경험하세요.`}</p>
        </div>
        <div className="account-page-section-inputs">
          {ACCOUNT_FIELDS.map(({
            name,
            value,
            placeholder,
            type,
            label,
          },idx)=>(
            <AuthInputContainer
              type={type}
              label={label}
              name={name}
              value={value}
              placeholder={placeholder}
              key={idx}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="account-page-button-box">
          <SubmitButtonContainer text="회원가입" handleSubmit={handleSubmit}/>
          <Link to="/login" className="login-link">이미 계정이 있으신가요?</Link>
        </div>
      </section>
    </main>
  )
}

export default Account