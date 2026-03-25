import { Link } from "react-router-dom";
import "./css/index.css";

interface Props{
    pathname:string;
}
const Header = ({pathname}:Props) => {
  return (
    <header className="header">
        <Link to="/" className="header-logo">
            <img 
                src="/assets/header/header-logo.png"
                srcSet="
                    /assets/header/header-logo@2x.png 2x,
                    /assets/header/header-logo@3x.png 3x
                " 
                alt="header-logo" 
            />
        </Link>
        {pathname !== "/user/login" && pathname !== "/user/account" && (
            <div className="header-menu"></div>
        )}
    </header>
  )
}

export default Header