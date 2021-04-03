import React, { useMemo } from 'react'
import cn from 'classnames'
import Social from '../Social/Social'
import styles from './Navigation.module.scss'
import { SOCIALS } from '../../constants'
import ShortArrow from '../../public/svg/short-arrow.svg'

const Navigation = ({
  className,
  items = [],
  active = false,
}: {
  className?: string
  items?: {
    label: string
    children: { label: string; link: string }[]
  }[]
  active?: boolean
}) => {
  const data = useMemo(
    () =>
      items?.map(({ children, label }) => (
        <div className={styles.item} key={label}>
          <div className={styles.itemLabel}>
            {label}
            <ShortArrow className={styles.itemHover} />
          </div>
          <ul className={styles.links}>
            {children.map(({ label, link }, index) => {
              return (
                <li key={index}>
                  <a className={styles.link} href={link} target="_blank">
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )),
    [items]
  )
  return (
    <nav
      className={cn(styles.nav, className, {
        [`${styles.navActive}`]: active,
      })}
    >
      <div className={styles.container}>
        {!!data.length && <ul className={styles.list}>{data}</ul>}
      </div>
        <Social className={styles.social} items={SOCIALS} />

        <div className={styles.footer}>
          &copy;2021&nbsp;Clover.finance All Rights Reserved.
      </div>
    </nav>
  )
}

export default Navigation
