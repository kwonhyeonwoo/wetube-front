import styles from "../css/index.module.css";
import { categoriesConstants } from '../../../../constants/categoriesConstants'
import CategoryBox from '../../../CategoryBox/CategoryBox'
import type { CategoryType } from "@/interfaces/media.type";
import { useCallback, type SetStateAction } from "react";

interface Props {
  currentCategory: CategoryType;
  setCurrentCategory: React.Dispatch<SetStateAction<CategoryType>>
}
const CategoriesContainer = ({ currentCategory, setCurrentCategory }: Props) => {
  const handleCategoryActive = useCallback(
    (category: CategoryType) => {
      setCurrentCategory(category);
    },
    [setCurrentCategory],
  );

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

export default CategoriesContainer;