import styles from "./css/index.module.css";
import { Link } from 'react-router-dom'

const LeftHeader = () => {
  return (
    <div className={styles.leftHeaderWrapper}>
        <button className={styles.leftHeaderWrapperMenuBtn}>
            <img 
                src="/assets/header/menu.png"
                srcSet="
                    /assets/header/menu@2x.png 2x,
                    /assets/header/menu@3x.png 3x
                " 
                alt="menu-bar" 
            />
        </button>
        <div className={styles.leftHeaderWrapperLogo}>
            <Link to="/" className="left-header-wrapper-logo-logo">
                <img 
                    src="/assets/header/header-logo.png"
                    srcSet="
                        /assets/header/header-logo@2x.png 2x,
                        /assets/header/header-logo@3x.png 3x
                    " 
                    alt="header-logo" 
                />
            </Link> 
            <p className={styles.leftHeaderWrapperLogoTitle}>
                YouTube
            </p>
        </div>
    </div>
  )
}

export default LeftHeader