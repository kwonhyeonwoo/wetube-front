import BestMedia from "../../components/BestMedia/BestMedia";
import useMediaAction from "../../hooks/useMediaAction";
import styles from "../css/index.module.css";

const ProfileFeatureContainer = () => {
    const {handleMediaAction} = useMediaAction();
  return (
    <section className={styles.feature}>
        <BestMedia handleMediaAction={handleMediaAction} />
        
    </section>
  );
}

export default ProfileFeatureContainer