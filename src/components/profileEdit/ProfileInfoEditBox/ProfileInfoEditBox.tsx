import styles from "./css/index.module.css";
import ProfileEditInput from "../ProfileEditInput/ProfileEditInput";
import type { UserEditType } from "@/schema/auth.schema";
import type { UseFormRegister, UseFormWatch } from "react-hook-form";

interface Props {
  watch:UseFormWatch<UserEditType>;
  register:UseFormRegister<UserEditType>;
}

const ProfileInfoEditBox = ({watch,register}:Props) => {
  return (
    <div className={styles.profileInfoEditBox}>
      <div className={styles.topBox}>
        <ProfileEditInput
            label="닉네임"
            type="text"
            name="nickName"
            placeholder="닉네임을 입력해주세요"
            value={watch('nickName')}
            register={register}
          />
          <ProfileEditInput
            label="이름"
            name="name"
            value={watch('name')}
            register={register}
            type="text"
            placeholder="이름을 입력해주세요"
          />
      </div>
      <div className={styles.middleBox}>
        <ProfileEditInput
          label="이메일"
          type="email"
          register={register}
          name="email"
          placeholder="이메일을 입력해주세요"
          value={watch('email')}
        />
      </div>
      <div className={styles.bottomBox}>
        <ProfileEditInput
          label="한 줄 소개"
          type="text"
          register={register}
          name="introduction"
          placeholder="한 줄 소개를 간단하게 입력해주세요."
          value={watch('introduction') || ""} 
          textArea
        />
      </div>
    </div>
  );
}

export default ProfileInfoEditBox