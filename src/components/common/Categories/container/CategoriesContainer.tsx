import { useCallback, useState } from "react"
import Categories from "../Categories"

const CategoriesContainer = () => {
    const [currentCategory, setCurrentCategory] = useState<string>("all");

    const handleCategoryActive = useCallback(
      (category:string) => {
            setCurrentCategory(category)
      },
      [],
    )
    
  return (
    <Categories
      currentCategory={currentCategory}
      handleCategoryActive={handleCategoryActive}
    />
  );
}

export default CategoriesContainer