import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import styles from "../css/index.module.css";
import ShortVideoCard from "../components/ShortVideoCard/ShortVideoCard";
import ShortActionBar from "../components/ShortActionBar/ShortActionBar";
const ShortContainer = () => {
  const {data} = useGetShorts();
  console.log('shorts',data)
  return <main className={styles.shortPage}>
    <section className={styles.shortSection}>
        <ShortVideoCard/>
        <ShortActionBar/>
    </section>
  </main>;
};

export default ShortContainer;
