import React, { useState, useCallback } from 'react'
import Navigation from './Navigation'
import MenuButton from './MenuButton'
import styles from '../styles/Header.module.scss'
import Logo from '../public/svg/logo.svg'
import Sakura from '../public/svg/sakura.svg'
import { HEADER_MENU } from '../constants'

const Header = () => {
  const [active, setActive] = useState(false)
  const toggleActive = useCallback(() => setActive(!active), [active])
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <i className={styles.logoImage}>
            <Logo />
          </i>
          <div className={styles.logoText}>clover</div>
        </div>
        <Navigation items={HEADER_MENU} active={active} />
        <div className={styles.rightBox}>
          <div className={styles.sakura}>
            <Sakura />
            {/* <div className={styles.sakuraText}>Sakura</div> */}
          </div>
          <MenuButton
            className={styles.button}
            active={active}
            onClick={toggleActive}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
