import React from 'react';
import styles from './Team.module.scss';
import cn from 'classnames';

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
    desc: 'Cofounder & Technical Lead',
  },
  {
    name: 'Mike Merritt',
    image: '/portrait/mike.png',
    desc: 'Marketing Lead',
  },
];

export function Team() {
  return (
    <div className={styles.content}>
      <div className={styles.team}>
        <header
          className={cn(styles.header, 'wow', 'bounceInUp')}
          data-wow-duration="2s"
          data-wow-delay="0s"
        >
          Team
        </header>
        <div
          className={cn(styles.people, 'wow', 'bounceInUp')}
          data-wow-duration="2s"
          data-wow-delay="0s"
        >
          {TEAM_DATA.map(d => {
            return (
              <div className={styles.peopleSingle} key={d.name}>
                <img className={styles.avatar} src={d.image} />
                <div className={styles.name}>{d.name}</div>
                <div className={styles.desc}>{d.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
