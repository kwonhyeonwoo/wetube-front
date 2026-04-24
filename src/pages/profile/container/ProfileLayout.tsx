import styles from "../css/index.module.css";
import { Outlet, useLocation, useParams } from "react-router-dom";
import useProfileAction from "../hooks/useProfileAction";
import { useGetUser } from "@/hooks/queries/auth/useAuthQuery";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import ProfileCategories from "../components/ProfileCategories/ProfileCategories";

const ProfileLayout = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data: user } = useGetUser(id ?? "");
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
