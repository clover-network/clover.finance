import React, { useState, useCallback, useEffect, useRef } from 'react'
import Navigation from './Navigation'
import cn from 'classnames'
import MenuButton from './MenuButton'
import styles from '../styles/Header.module.scss'
import Logo from '../public/svg/logo.svg'
import Sakura from '../public/svg/sakura.svg'
import { HEADER_MENU } from '../constants'

const Header = () => {
  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(false)
  const toggleActive = useCallback(() => setActive(!active), [active])

  useEffect(() => {
    const html = document.documentElement

    const onScroll = () => {
      if (html.scrollTop > 40) {
        setScroll(true)
      } else if (scroll) {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scroll])

  return (
    <header
      className={cn(styles.wrapper, {
        [styles.fixed]: scroll,
      })}
    >
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
