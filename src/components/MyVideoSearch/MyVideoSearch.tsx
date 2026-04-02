
import styles from "./css/index.module.css";
import SearchIcon from "@/assets/common/search.svg";
import type { UseFormRegister } from "react-hook-form";
interface Props {
  register: UseFormRegister<{ value: string; query: string }>;
  handleSortClicked: (query: string) => void;
  currentQuery:string;
}

const MyVideoSearch = ({
  register,
  handleSortClicked,
  currentQuery,
}: Props) => {
  const sortArr = [
    {
      text: "최신순",
      query: "latest",
    },
    {
      text: "인기순",
      query: "popular",
    },
    {
      text: "오래된 순",
      query: "oldest",
    },
  ];
  return (
    <section className={styles.searchSection}>
      <form  className={styles.form}>
        <div className={styles.sortOptions}>
          {sortArr.map((item, idx) => (
            <button
                type="button"
              onClick={() => handleSortClicked(item.query)}
              className={`
                ${styles.sortBtn} 
                ${currentQuery === item.query && styles.activeSortBtn}`}
              key={idx}
            >
              {item.text}
            </button>
          ))}
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.input}
            placeholder="검색어를 입력해주세요"
            {...register("value")}
          />
          <img src={SearchIcon} alt="search" className={styles.svg} />
        </div>
      </form>
    </section>
  );
};

export default MyVideoSearch;