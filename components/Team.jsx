import React from 'react'
import styles from '../styles/Team.module.scss'

const TEAM_DATA = [
  {
    name: 'Viven Kirby',
    desc: 'Cofounder & Project Lead',
  },
  {
    name: 'Norelle Ng',
    desc: 'Cofounder & Operation Lead',
  },
  {
    name: 'Burak Keçeli',
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
            <div>
              <div className={styles.name}>{d.name}</div>
              <div className={styles.desc}>{d.desc}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
