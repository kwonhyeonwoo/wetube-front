import "./css/index.css";
interface Props {
  title: string;
  name: string;
  currentCategory: string;
  handleCategoryActive: (category: string) => void;
}
const CategoryBox = ({title,name,currentCategory,handleCategoryActive}:Props) => {
  return (
    <button
      className={`category-box ${name === currentCategory && "active-category-box"}`}
      onClick={() => handleCategoryActive(name)}
    >
      {title}
    </button>
  );
}

export default CategoryBox