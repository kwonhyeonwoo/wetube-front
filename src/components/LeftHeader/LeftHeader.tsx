import "./css/index.css";
import { Link } from 'react-router-dom'

const LeftHeader = () => {
  return (
    <div className='left-header-wrapper'>
        <button className='left-header-wrapper-menu-btn'>
            <img 
                src="/assets/header/menu.png"
                srcSet="
                    /assets/header/menu@2x.png 2x,
                    /assets/header/menu@3x.png 3x
                " 
                alt="menu-bar" 
            />
        </button>
        <div className='left-header-wrapper-logo'>
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
            <p className='left-header-wrapper-logo-title'>
                YouTube
            </p>
        </div>
    </div>
  )
}

export default LeftHeader