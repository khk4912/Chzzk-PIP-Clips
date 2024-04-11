import { Link, useNavigate } from 'react-router-dom'

import Logo from '../assets/logo.png'
import styles from '../styles/menu.module.css'

const Menu = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <img src={Logo} alt='Chzzk-PIP 로고' />
        <span id={styles.logoText}>Chzzk-PIP</span>
      </div>
      <ul className={styles.navItems}>
        <li onClick={() => { navigate('/') }}>
          <span>홈</span>
        </li>
        <li onClick={() => {
          navigate('/trending')
        }}
        >
          <span>인기</span>
        </li>
        <li>
          <span>급상승</span>
        </li>
      </ul>

      <div className={styles.searchBar}>
        <input type='text' name='' id='' placeholder='검색...' />
      </div>
    </nav>
  )
}

export default Menu
