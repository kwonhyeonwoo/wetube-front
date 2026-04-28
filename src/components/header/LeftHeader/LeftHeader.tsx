import styles from "./css/index.module.css";
import { Link } from 'react-router-dom'

const LeftHeader = () => {
  return (
    <div className={styles.leftHeader}>
        <button className={styles.menubar}>
            <img 
                src="/assets/header/menu.png"
                srcSet="
                    /assets/header/menu@2x.png 2x,
                    /assets/header/menu@3x.png 3x
                " 
                alt="menu-bar" 
            />
        </button>
        <div className={styles.logoBox}>
            <Link to="/" className={styles.logoLink}>
                <img 
                    src="/assets/header/header-logo.png"
                    srcSet="
                        /assets/header/header-logo@2x.png 2x,
                        /assets/header/header-logo@3x.png 3x
                    " 
                    alt="header-logo" 
                />
                <p className={styles.logoTitle}>
                    YouTube
                </p>
            </Link> 
            
        </div>
    </div>
  )
}

export default LeftHeader