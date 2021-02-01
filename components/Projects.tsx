import React, { useMemo } from 'react';
import cn from 'classnames';
import Image from 'next/image'
import styles from '../styles/Projects.module.scss';

const Projects = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    image: string;
    width: number;
    height: number;
    title: string;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ image, width, height, title}) => (
      <li key={title} className={styles.item}>
        <div className={styles.image}>
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
          />
        </div>
      </li>
    ))
  ), [items]);
  if (data.length) {
    return (
      <div className={cn(styles.wrapper, className)}>
        <h2 className={styles.title}>
          Projects Building <span className={styles.accent}>on&nbsp;Clover</span>
        </h2>
        <ul className={styles.list}>{data}</ul>
      </div>
    );
  }
  return null;
};

export default Projects;
