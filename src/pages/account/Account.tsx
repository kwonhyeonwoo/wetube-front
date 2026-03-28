import type { IAccount } from "auth";
import AuthPageTemplate from "../../components/auth/AuthPageTemplate/AuthPageTemplate";
import { ACCOUNT_FIELDS } from "../../constants/authConstants";

interface Props {
  inputs: IAccount;
  handleSubmit: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Account = ({
  inputs,
  handleChange,
  handleSubmit,
}: Props) => {

  return (
    <AuthPageTemplate
      title={"계정 만들기"}
      subTitle={`The Redacted Minimalist의 일원이 되어
간결하고 명확한 컨텐츠를 경험하세요.`}
      fields={ACCOUNT_FIELDS}
      link={"/user/login"}
      linkText={"이미 계정이 있으신가요?"}
      btnText="회원가입"
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Account;
