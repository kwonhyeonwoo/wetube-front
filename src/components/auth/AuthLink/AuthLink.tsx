import "./css/index.css";
import { Link } from 'react-router-dom';

interface Props{
    link:string;
    text:string;
}

const AuthLink = ({link,text}:Props) => {
  return (
    <Link to={link} className="auth-link">
      {text}
    </Link>
  );
}

export default AuthLink