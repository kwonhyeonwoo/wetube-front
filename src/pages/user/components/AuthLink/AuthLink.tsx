import styles from "./css/index.module.css";
import { Link } from 'react-router-dom';

interface Props{
    link:string;
    text:string;
}

const AuthLink = ({link,text}:Props) => {
  return (
    <Link to={link} className={styles.authLink}>
      {text}
    </Link>
  );
}

export default AuthLink