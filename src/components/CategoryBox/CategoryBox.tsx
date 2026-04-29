import type { CategoryType } from "@/interfaces/media.type";
import styles from "./css/index.module.css";
interface Props {
  title: string;
  name: CategoryType;
  currentCategory: CategoryType;
  handleCategoryActive: (category: CategoryType) => void;
}
const CategoryBox = ({title,name,currentCategory,handleCategoryActive}:Props) => {
  return (
    <button
      className={`${styles.categoryBtn} ${name === currentCategory ? styles.activeCategoryBtn : ""}`}
      onClick={() => handleCategoryActive(name)}
    >
      {title}
    </button>
  );
}

export default CategoryBox