import React, { useMemo } from 'react'
import cn from 'classnames'
import Social from './Social'
import styles from '../styles/Navigation.module.scss'
import { SOCIALS } from '../constants'
import ShortArrow from '../public/svg/short-arrow.svg'

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
            {children.map(({ label, link }) => {
              return (
                <li key={link}>
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
        <Social className={styles.social} items={SOCIALS} />
      </div>
      <div className={styles.footer}>
        &copy;2021&nbsp;CloverProject. All Rights Reserved.
      </div>
    </nav>
  )
}

export default Navigation
