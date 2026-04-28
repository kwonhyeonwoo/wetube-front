import styles from "../css/index.module.css";
import { Outlet, useLocation, useParams } from "react-router-dom";
import useProfileAction from "../hooks/useProfileAction";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import ProfileCategories from "../components/ProfileCategories/ProfileCategories";
import { useGetUserQuery } from "@/hooks/queries/auth/useGetUserQuery";

const ProfileLayout = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data: user } = useGetUserQuery(id);
  const { handleCategoryAction, handleProfileAction} = useProfileAction(id);
  return (
    <main className={styles.profileLayout}>
      <ProfileSection
        user={user}
        userId={id ?? ""}
        handleProfileAction={handleProfileAction}
      />
      <ProfileCategories
        pathname={id}
        tab={location.pathname.split('/')[3]}
        handleCategoryAction={handleCategoryAction}
      />
      <Outlet />
    </main>
  );
};

export default ProfileLayout;
