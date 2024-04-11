import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'
import styles from '../styles/menu.module.css'

const Menu = (): JSX.Element => (
  <nav className={styles.navbar}>
    <div className={styles.navLogo}>
      <img src={Logo} alt='Chzzk-PIP 로고' />
      <span id={styles.logoText}>Chzzk-PIP</span>
    </div>
    <ul className={styles.navItems}>
      <li>
        <Link to='/'>
          <span>홈</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <span>인기</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <span>급상승</span>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu
