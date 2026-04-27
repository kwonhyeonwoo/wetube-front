import type { IAuthFields, LoginRequest } from "@/interfaces/auth.type";
import type { SignUpType } from "@/schema/auth.schema";

export const ACCOUNT_FIELDS: IAuthFields<SignUpType>[] = [
  {
    name: "name",
    label: "이름",
    placeholder: "홍길동",
    min: 2,
    max: 6,
    type: "text",
  },
  {
    name: "email",
    label: "이메일",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    name: "nickName",
    label: "닉네임",
    min:3,
    max:6,
    placeholder: "사용할 닉네임을 입력하세요",
    type: "text",
  },
  {
    name: "password",
    label: "비밀번호",
    min:8,
    max:16,
    placeholder: "8자 이상의 영문, 숫자 조합",
    type: "password",
  },
  {
    name: "passwordConfirm",
    label: "비밀번호 확인",
    min:8,
    max:16,
    placeholder: "비밀번호 확인",
    type: "password",
  },
] as const;

export const LOGIN_FIELDS: IAuthFields<LoginRequest>[] = [
  {
    name: "email",
    label: "이메일",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    name: "password",
    label: "비밀번호",
    placeholder: "8자 이상의 영문, 숫자 조합",
    type: "password",
    min:8,
    max:16,
  },

] as const;

export const GUEST_USER = [
  {
    text:"로그인",
    link:"login"
  },
  {
    text:"회원가입",
    link:"account"
  }
]