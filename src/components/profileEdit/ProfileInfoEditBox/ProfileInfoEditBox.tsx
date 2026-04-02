import type { UserResponse } from "@/interfaces/auth.type";
import styles from "./css/index.module.css";
import ProfileEditInput from "../ProfileEditInput/ProfileEditInput";

interface Props {
  data: UserResponse;
}

const ProfileInfoEditBox = ({data}:Props) => {
    const topArr = [
      {
        label: "닉네임",
        placeholder: "이메일을 입력해주세요",
        value: data.nickName,
        type: "text",
      },
      {
        label: "이름",
        placeholder: "이름을 입력해주세요",
        value: data.name,
        type: "text",
      },
    ];
  return (
    <div className={styles.profileInfoEditBox}>
      <div className={styles.topBox}>
        {topArr.map((item, idx) => (
          <ProfileEditInput
            key={idx}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
            value={item.value}
            handleChange={() => {}}
          />
        ))}
      </div>
      <div className={styles.middleBox}>
        <ProfileEditInput
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={data.email}
          handleChange={() => {}}
        />
      </div>
      <div className={styles.bottomBox}>
        <ProfileEditInput
          label="한 줄 소개"
          type="text"
          placeholder="한 줄 소개를 간단하게 입력해주세요."
          value={""}
          textArea
          handleChange={() => {}}
        />
      </div>
    </div>
  );
}

export default ProfileInfoEditBox