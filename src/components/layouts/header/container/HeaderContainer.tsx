import { useLocation } from 'react-router-dom'
import Header from '../Header'

const HeaderContainer = () => {
    const {pathname} = useLocation();
  return (
    <Header pathname={pathname}/>
    )
}

export default HeaderContainer