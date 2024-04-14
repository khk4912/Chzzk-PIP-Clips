import { useNavigate } from 'react-router-dom'

import Logo from '../assets/logo.png'
import searchIcon from '../assets/search.svg'
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
      <div className={styles.rightMenu}>
        <button
          id={styles.extDownload}
          onClick={() => { window.open('https://chromewebstore.google.com/detail/chzzk-pip/gkgpbobdiaaodjbmgdankimklclnagio?hl=ko', '_blank') }}
        >확장 다운로드
        </button>

        <div className={styles.searchBar}>
          <input type='text' name='' id='' placeholder='검색...' />
        </div>

        <div className={styles.mobileSearch}>
          <img id={styles.searchIcon} src={searchIcon} alt='검색' />
        </div>
      </div>

    </nav>
  )
}

export default Menu
