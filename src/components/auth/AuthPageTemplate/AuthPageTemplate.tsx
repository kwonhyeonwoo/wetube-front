import styles from "./css/index.module.css";
import type {  IAuthFields } from "auth";
import SubmitButtonContainer from "../../common/SubmitButton/container/SubmitButtonContainer";
import AuthInputContainer from "../authInput/container/AuthInputContainer";
import AuthLink from "../AuthLink/AuthLink";
interface Props<T> {
  title: string;
  subTitle?: React.ReactNode;
  fields: IAuthFields[];
  link: string;
  linkText: string;
  btnText: string;
  inputs: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}
const AuthPageTemplate = <T extends Record<string, any>>({
    title,
    subTitle,
    fields,
    link,
    linkText,
    btnText,
    inputs,
    handleChange,
    handleSubmit
}:Props<T>) => {
  return (
    <main className={styles.authPageTemplate}>
      <section className={styles.section}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <div className={styles.inputs}>
          {fields.map(({ name, placeholder, type, label }, idx) => (
            <AuthInputContainer
              type={type}
              label={label}
              name={name}
              value={inputs[name as keyof T]}
              placeholder={placeholder}
              key={idx}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className={styles.buttonBox}>
          <SubmitButtonContainer text={btnText} handleSubmit={handleSubmit} />
          <AuthLink link={link} text={linkText} />
          {link === "/user/login" && (
            <span className={styles.terms}>
              가입 버튼을 누름으로써, 이용약관 및 개인정보처리방침에 동의하게
              됩니다.
            </span>
          )}
        </div>
      </section>
    </main>
  );
}

export default AuthPageTemplate