import styles from "./css/index.module.css";
import { Link } from "react-router-dom";
const RightHeader = () => {
  return (
    <div className={styles.rightHeaderWrapper}>
      <Link  to='/video/write' className={styles.rightHeaderWrapperWriteButton}>
        <img  
          src="/assets/header/plus.png"
          srcSet="/assets/header/plus@2x.png 2x,
            /assets/header/plus@3x.png 3x,
          "
          alt="glass" 
        />
        <span className={styles.rightHeaderWrapperWriteButtonText}>만들기</span>
      </Link>

      <button  className={styles.rightHeaderWrapperAlertButton}>
        <img 
          src="/assets/header/alert.png"
          srcSet="
            /assets/header/alert@2x.png 2x,
            /assets/header/alert@3x.png 3x,
          " 
          alt="alert" 
        />
        <div className={styles.rightHeaderWrapperAlertButtonCircle}/>
      </button>

      <Link to={'/user/123'} className={styles.rightHeaderWrapperProfile}>
        test
      </Link>
    </div>
  )
}

export default RightHeader