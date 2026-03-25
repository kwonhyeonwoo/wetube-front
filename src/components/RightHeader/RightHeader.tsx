import { Link } from "react-router-dom";
import "./css/index.css";
const RightHeader = () => {
  return (
    <div className="right-header-wrapper">
      <Link  to='/video/write' className="right-heaeer-wrapper-write-button">
        <img  
          src="/assets/header/plus.png"
          srcSet="/assets/header/plus@2x.png 2x,
            /assets/header/plus@3x.png 3x,
          "
          alt="glass" 
        />
        <span className="right-header-wrapper-write-button-text">만들기</span>
      </Link>

      <button  className="right-header-wrapper-alert-button">
        <img 
          src="/assets/header/alert.png"
          srcSet="
            /assets/header/alert@2x.png 2x,
            /assets/header/alert@3x.png 3x,
          " 
          alt="alert" 
        />
        <div className="right-header-wrapper-alert-button-circle"/>
      </button>

      <button className="right-header-wrapper-profile">
        test
      </button>
    </div>
  )
}

export default RightHeader