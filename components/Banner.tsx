import React, { ReactNode } from 'react'
import cn from 'classnames'
import Logo from '../public/svg/logo.svg'
import IconOne from '../public/svg/token1.svg'
import IconTwo from '../public/svg/token2.svg'
import IconThree from '../public/svg/token3.svg'
import IconFour from '../public/svg/token4.svg'
import IconFive from '../public/svg/token5.svg'
import IconSix from '../public/svg/token6.svg'

import styles from '../styles/Banner.module.scss'

export function Banner() {
  return (
    <div className={styles.banner}>
      <IconOne className={cn(styles.tokenIcon, styles.one)} />
      <IconTwo className={cn(styles.tokenIcon, styles.two)} />
      <IconThree className={cn(styles.tokenIcon, styles.three)} />
      <IconFour className={cn(styles.tokenIcon, styles.four)} />
      <IconFive className={cn(styles.tokenIcon, styles.five)} />
      <IconSix className={cn(styles.tokenIcon, styles.six)} />
      <div className={styles.ware}>
        <i className={styles.logo}>
          <Logo className={styles.icon} />
        </i>
      </div>
    </div>
  )
}
