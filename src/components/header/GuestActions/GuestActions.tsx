import { GUEST_USER } from "@/constants/authConstants";
import styles from "./css/index.module.css";
import { Link } from "react-router-dom";

const GuestActions = () => {

  return <div className={styles.guestActions}>
    {GUEST_USER.map(({text,link},idx)=>(
        <Link className={styles.link} to={`/user/${link}`} key={idx}>{text}</Link>
    ))}
</div>;
}

export default GuestActions