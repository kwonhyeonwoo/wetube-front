import { useCallback } from "react";
import { useLoginMutation } from "../../../hooks/mutations/auth/useLoginMutation";
import AuthPageTemplate from "@/pages/user/components/AuthPageTemplate/AuthPageTemplate";
import { LOGIN_FIELDS } from "@/constants/authConstants";
import { useForm } from "react-hook-form";
import { signInSchema, type SignInType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnInvalid } from "../hooks/useOnInvalid";

const LoginContainer = () => {
  const { mutate: login } = useLoginMutation();
  const { onInvalid } = useOnInvalid();
  const { register, handleSubmit } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = useCallback(
    (data: SignInType) => {
      login(data);
    },
    [login],
  );
  return (
    <AuthPageTemplate
      title="로그인"
      fields={LOGIN_FIELDS}
      link="/user/account"
      linkText="계정이 없으신가요?"
      btnText="로그인"
      register={register}
      handleSubmit={handleSubmit}
      onInvalid={onInvalid}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
