import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import styles from "../css/index.module.css";
import ShortVideoCard from "../components/ShortVideoCard/ShortVideoCard";
import ShortActionBarContainer from "../components/ShortActionBar/container/ShortActionBarContainer";
const ShortContainer = () => {
  const { data } = useGetShorts();
  return (
    <main className={styles.shortPage}>
      {data?.map((short) => (
        <section key={short._id} className={styles.shortSection}>
          <ShortVideoCard {...short} handleFollowAction={() => {}} />
          <ShortActionBarContainer />
        </section>
      ))}
    </main>
  );
};

export default ShortContainer;
