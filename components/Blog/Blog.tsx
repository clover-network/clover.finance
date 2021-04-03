import React, { useMemo } from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';
import styles from './Blog.module.scss';

const Blog = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    image: string;
    link: string;
    text: string;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ image, link, text }, index) => (
      <li key={link} className={styles.item}>
        <InView threshold={0.3} delay={index * 100} triggerOnce>
          {({ inView, ref}) => (
            <a
              target="_blank"
              href={link}
              ref={ref}
              className={cn(styles.link, styles.hidden, {
                [`${styles.visible}`]: inView,
              })}
            >
              <div className={styles.article}>
                <div className={styles.image}>
                  <img src={image} alt={text} />
                </div>
                <div className={styles.text}>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              </div>
            </a>
          )}
        </InView>
      </li>
    ))
  ), [items]);
  if (data.length) {
    return (
      <div className={cn(styles.wrapper, className)}>
          <div className={cn(styles.container)}>
              <InView threshold={0.5} triggerOnce>
                  {({ inView, ref}) => (
                      <h2 ref={ref}
                          className={cn(styles.title, styles.hidden, {[`${styles.visible}`]: inView,})}>
                          Blog
                      </h2>
                  )}
              </InView>
              <ul className={styles.list}>{data}</ul>
          </div>
      </div>
    );
  }
  return null;
};

export default Blog;
