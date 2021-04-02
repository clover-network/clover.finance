import React, { useMemo } from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';
import styles from './Partners.module.scss';

const Partners = ({
  className,
  items = [],
  topItems = [],
}: {
  className?: string;
  items?: {
    image: string;
    hover: string;
    width: number;
    height: number;
    title: string;
    link: string;
  }[];
  topItems?: {
    image: string;
    hover: string;
    width: number;
    height: number;
    title: string;
    link: string;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ image, hover, width, height, title, link}, index) => (
      <li key={title} className={styles.item}>
        <InView threshold={0.5} delay={index * 50} triggerOnce>
          {({ inView, ref}) => (
            <a
              target="_blank"
              href={link}
              ref={ref}
              className={cn(styles.link, styles.hidden, {
                [`${styles.visible}`]: inView,
              })}
            >
              <img
                className={styles.mono}
                src={image}
                alt={title}
                width={width}
                height={height}
              />
              <img
                className={styles.multi}
                src={hover}
                alt={title}
                width={width}
                height={height}
              />
            </a>
          )}
        </InView>
      </li>
    ))
  ), [items]);

  const topData = useMemo(() => (
    topItems?.map(({ image, hover, width, height, title, link}, index) => (
      <li key={title} className={styles.item}>
        <InView threshold={0.5} delay={index * 50} triggerOnce>
          {({ inView, ref}) => (
            <a
              target="_blank"
              href={link}
              ref={ref}
              className={cn(styles.link, styles.hidden, {
                [`${styles.visible}`]: inView,
              })}
            >
              <img
                className={styles.mono}
                src={image}
                alt={title}
                width={width}
                height={height}
              />
              <img
                className={styles.multi}
                src={hover}
                alt={title}
                width={width}
                height={height}
              />
            </a>
          )}
        </InView>
      </li>
    ))
  ), [topItems]);

  if (data.length) {
    return (
      <div className={cn(styles.wrapper, className)}>
        <InView threshold={0.5} triggerOnce>
          {({ inView, ref}) => (
            <h2
              ref={ref}
              className={cn(styles.title, styles.hidden, {
                [`${styles.visible}`]: inView,
              })}
            >
              Our partners
            </h2>
          )}
        </InView>
        <ul className={styles.list}>{topData}</ul>
        <ul className={styles.list}>{data}</ul>
      </div>
    );
  }
  return null;
};

export default Partners;
