import styles from "../css/index.module.css";
import LeftHeader from "@/components/header/LeftHeader/LeftHeader";
import CenterHeader from "@/components/header/CenterHeader/CenterHeader";
import RightHeader from "@/components/header/RightHeader/RightHeader";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "@/hooks/queries/auth/useGetMe";
import { useLogoutMutation } from "@/hooks/mutations/auth/useLogoutMutation";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { mutate: logOut } = useLogoutMutation();
  const { data: user } = useGetMe();
  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const onSubmit: SubmitHandler<{ keyword: string }> = useCallback(
    (data) => {
      navigate(`/search?keyword=${data.keyword}`);
    },
    [navigate],
  );
  const handleLogOut = useCallback(() => {
    logOut();
  }, [logOut]);
  return (
    <header className={styles.header}>
      <LeftHeader />
      <CenterHeader
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
      <RightHeader user={user} handleLogOut={handleLogOut} />
    </header>
  );
};

export default HeaderContainer;
