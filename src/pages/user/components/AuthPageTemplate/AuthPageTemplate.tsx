import styles from "./css/index.module.css";
import AuthLink from "../AuthLink/AuthLink";
import type { IAuthFields } from "@/interfaces/auth.type";
import type {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";
import AuthInput from "../authInput/AuthInput";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";

interface Props<T extends FieldValues> {
  title: string;
  subTitle?: React.ReactNode;
  fields: IAuthFields<T>[];
  link: string;
  linkText: string;
  btnText: string;
  onInvalid: (error: any) => void;
  handleSubmit: UseFormHandleSubmit<T>;
  register: UseFormRegister<T>;
  onSubmit: SubmitHandler<T>;
}

const AuthPageTemplate = <T extends FieldValues>({
  title,
  subTitle,
  fields,
  link,
  linkText,
  btnText,
  onInvalid,
  register,
  handleSubmit,
  onSubmit,
}: Props<T>) => {
  return (
    <main className={styles.authPageTemplate}>
      <section className={styles.section}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <div className={styles.inputs}>
            {fields.map(({ name, placeholder, type, label, min, max }, idx) => (
              <AuthInput
                type={type}
                label={label}
                name={name}
                placeholder={placeholder}
                key={idx}
                min={min}
                max={max}
                register={register}
              />
            ))}
          </div>
          <div className={styles.buttonBox}>
            <SubmitButton type="submit" text={btnText} />
            <AuthLink link={link} text={linkText} />
            {link === "/user/login" && (
              <span className={styles.terms}>
                가입 버튼을 누름으로써, 이용약관 및 개인정보처리방침에 동의하게
                됩니다.
              </span>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default AuthPageTemplate;
