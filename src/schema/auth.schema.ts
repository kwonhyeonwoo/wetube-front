import { z } from "zod"


export const baseAuthSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2글자 입니다.")
    .max(6, "이름은 최대 6글자 입니다."),
  email: z.string(),
  nickName: z
    .string()
    .min(3, "닉네임은 최소 3글자 입니다.")
    .max(6, "닉네임은 최대 6글자 입니다."),
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요",
    )
    .min(8, "비밀번호는 최소 8글자 입니다.")
    .max(16, "비밀번호는 최대 16글자 입니다."),
  passwordConfirm: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요",
    )
    .min(8, "비밀번호는 최소 8글자 입니다.")
    .max(16, "비밀번호는 최대 16글자 입니다."),
  introduction: z.string().optional(),
  avatar:z.instanceof(File).optional(),
});

export const signUpSchema = baseAuthSchema.refine(
    (data)=>data.password === data.passwordConfirm,
    {
        message:"비밀번호가 일치하지 않습니다.",
        path:["passwordConfirm"]
    }
)
export const userEditSchema = baseAuthSchema
  .omit({ 
    password: true, 
    passwordConfirm: true 
  }) 
  .extend({
    avatar: z.union([z.string(), z.instanceof(File)]).optional(), 
  });
export const signInSchema = baseAuthSchema.pick({
    email:true,
    password:true,
});

// passwordConfirm빼고 나머지 값, partial은 optional같은 기능
export const authUpdateSchema = baseAuthSchema
.omit({passwordConfirm:true})
.partial();

export type UserEditType = z.infer<typeof userEditSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;
export type AuthUpdateType = z.infer<typeof authUpdateSchema>;