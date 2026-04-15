import styles from "./css/index.module.css";
import { categoriesConstants } from '../../../constants/categoriesConstants'
import CategoryBox from '../../CategoryBox/CategoryBox'
import type { CategoryType } from "@/interfaces/media.type";

interface Props {
  currentCategory: CategoryType;
  handleCategoryActive: (category: CategoryType) => void;
}
const Categories = ({ currentCategory, handleCategoryActive }: Props) => {
  return (
    <div className={styles.categoriesWrapper}>
      {categoriesConstants.map(({ name, title }, idx) => (
        <CategoryBox
            key={idx}
            title={title}
            name={name}
            currentCategory={currentCategory}
            handleCategoryActive={handleCategoryActive}
        />
      ))}
    </div>
  );
};

export default Categories