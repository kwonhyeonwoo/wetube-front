import { writeCategory } from "@/constants/categoriesConstants";
import styles from "./css/index.module.css";
import { Link, useLocation } from "react-router-dom";

const WriteCategory = () => {
    const {pathname} = useLocation();
  return (
    <ul className={styles.categoryLists}>
      {writeCategory.map(({ title, path }, idx) => (
        <li className={`${styles.categoryList} ${path === pathname && styles.activeList}`} key={idx}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default WriteCategory