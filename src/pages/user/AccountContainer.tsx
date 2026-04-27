import { useCallback } from 'react'
import { useAccountMutation } from '@/hooks/mutations/auth/useAccountMutation';
import AuthPageTemplate from '@/components/auth/AuthPageTemplate/AuthPageTemplate';
import { ACCOUNT_FIELDS } from '@/constants/authConstants';
import { useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpType } from '@/schema/auth.schema';
import { useOnInvalid } from './hooks/useOnInvalid';

const AccountContainer = () => {
  const {mutate:account} = useAccountMutation();
  const { onInvalid } = useOnInvalid(); 

  const {register,handleSubmit} = useForm<SignUpType>({
    resolver:zodResolver(signUpSchema),
    defaultValues:{
      name:"",
      email:"",
      nickName:"",
    }
  });
  const onSubmit = useCallback(
    (data: SignUpType) => {
      const { passwordConfirm, ...accountRequestData } = data;
      account(accountRequestData);
    },
    [account],
  );
  return (
    <AuthPageTemplate
      title={"계정 만들기"}
      subTitle={`The Redacted Minimalist의 일원이 되어
간결하고 명확한 컨텐츠를 경험하세요.`}
      fields={ACCOUNT_FIELDS}
      link={"/user/login"}
      linkText={"이미 계정이 있으신가요?"}
      btnText="회원가입"
      onInvalid={onInvalid}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
}

export default AccountContainer