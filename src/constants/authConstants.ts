import type { IAuthFields } from "auth";

export const ACCOUNT_FIELDS: IAuthFields[] = [
  {
    name: "name",
    label: "이름",
    placeholder: "홍길동",
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
    placeholder: "사용할 닉네임을 입력하세요",
    type: "text",
  },
  {
    name: "password",
    label: "비밀번호",
    placeholder: "8자 이상의 영문, 숫자 조합",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "비밀번호 확인",
    placeholder: "비밀번호 확인",
    type: "password",
  },
] as const;

export const LOGIN_FIELDS: IAuthFields[] = [
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