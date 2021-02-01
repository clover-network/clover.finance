import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from '../styles/Press.module.scss';

const Press = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    text: string;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ text }, index) => (
      <li key={`block$${index}`} className={styles.item}>
        <div className={styles.article}>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <div className={styles.image} />
        </div>
      </li>
    ))
  ), [items]);
  if (data.length) {
    return (
      <div className={cn(styles.wrapper, className)}>
        <h2 className={styles.title}>
          Press
        </h2>
        <ul className={styles.list}>{data}</ul>
      </div>
    );
  }
  return null;
};

export default Press;
