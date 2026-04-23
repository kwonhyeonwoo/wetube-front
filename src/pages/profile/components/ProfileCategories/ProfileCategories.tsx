import { PROFILE_CATEGORIES } from "@/constants/categoriesConstants";
import styles from "./css/index.module.css";

interface Props {
  pathname: string | undefined;
  tab:string | undefined;
  handleCategoryAction: (uid: string, path: string) => void;
}
const ProfileCategories = ({
  pathname,
  tab,
  handleCategoryAction,
}: Props) => {
  return (
    <section className={styles.categorySection}>
      <ul className={styles.categories}>
        {pathname &&
          PROFILE_CATEGORIES(pathname).map(({ text, path }, idx) => (
            <li
              className={`
                ${styles.category}
                ${tab === path && styles.activeCategory}
              `}
              key={idx}
              onClick={() => handleCategoryAction(pathname, path)}
            >
              {text}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProfileCategories