import React from 'react'
import Image from 'next/image'
import styles from '../styles/Team.module.scss'

const TEAM_DATA = [
  {
    name: 'Viven Kirby',
    image: '/portrait/viven.png',
    desc: 'Cofounder & Project Lead',
  },
  {
    name: 'Norelle Ng',
    image: '/portrait/ng.png',
    desc: 'Cofounder & Operation Lead',
  },
  {
    name: 'Burak Keçeli',
    image: '/portrait/burak.png',
    desc: 'Cofounder & Technical Lead ',
  },
]

export function Team() {
  return (
    <div className={styles.team}>
      <header className={styles.header}>Team</header>
      <div className={styles.people}>
        {TEAM_DATA.map((d) => {
          return (
            <div className={styles.peopleSingle} key={d.name}>
              <img className={styles.avatar} src={d.image} />
              <div className={styles.name}>{d.name}</div>
              <div className={styles.desc}>{d.desc}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
