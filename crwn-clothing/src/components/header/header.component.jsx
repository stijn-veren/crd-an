// modules
import { Link } from 'react-router-dom'

// components
import { ReactComponent as Logo } from '../../assets/crown.svg'

// styles
import './header.styles.sass'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
)

export default Header
