import React from 'react'
import cn from 'classnames'
import Logo from '../../public/svg/logo.svg'
import IconOne from '../../public/svg/token1.svg'
import IconTwo from '../../public/svg/token2.svg'
import IconThree from '../../public/svg/token3.svg'
import IconFour from '../../public/svg/token4.svg'
import IconFive from '../../public/svg/token5.svg'
import IconSix from '../../public/svg/token6.svg'

import styles from './Banner.module.scss'

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.wareOuter}>
        <IconOne className={cn(styles.tokenIcon, styles.one)} />
        <IconSix className={cn(styles.tokenIcon, styles.six)} />
        <div className={cn(styles.ball, styles.ballOne)}></div>
        <div className={cn(styles.ball, styles.ballTwo)}></div>
        <div className={cn(styles.ball, styles.ballThree)}></div>
      </div>

      <div className={styles.wareMiddle}>
        <IconTwo className={cn(styles.tokenIcon, styles.two)} />
        <IconThree className={cn(styles.tokenIcon, styles.three)} />
        <IconFive className={cn(styles.tokenIcon, styles.five)} />
        <div className={cn(styles.ball, styles.ballOne)}></div>
        <div className={cn(styles.ball, styles.ballTwo)}></div>
      </div>

      <div className={styles.wareInner}>
        <IconFour className={cn(styles.tokenIcon, styles.four)} />
        <div className={cn(styles.ball, styles.ballOne)}></div>
        <i className={styles.logo}>
          <Logo className={styles.icon} />
        </i>
      </div>
    </div>
  )
}
