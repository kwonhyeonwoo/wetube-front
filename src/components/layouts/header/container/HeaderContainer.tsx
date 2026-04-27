import styles from "../css/index.module.css";
import LeftHeader from '@/components/header/LeftHeader/LeftHeader';
import CenterHeader from "@/components/header/CenterHeader/CenterHeader";
import RightHeader from "@/components/header/RightHeader/RightHeader";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useCallback,  } from "react";
import { useNavigate } from "react-router-dom";
import type { IUserMe } from "@/interfaces/auth.type";

interface Props{
  user?: IUserMe;
}
const HeaderContainer = ({ user }: Props) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const onSubmit: SubmitHandler<{ keyword: string }> = useCallback(
    (data) => {
      navigate(`/search?keyword=${data.keyword}`);
    },
    [navigate],
  );

  return (
    <header className={styles.header}>
      <LeftHeader />
      <CenterHeader
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
      <RightHeader user={user} />
    </header>
  );
};

export default HeaderContainer