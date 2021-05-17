import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './CloverFeature.module.scss';
import useMobileDetect from '../../utils/hooks/useMobileDetect';

const Features = ({
  features = [],
  handleScroll,
}: {
  features?: {
    title?: string;
    content?: string;
    btnText?: string;
    link?: string;
    img?: string;
    name?: string;
    index?: number;
    image?: string;
    imageSakura?: string;
  }[];
  handleScroll?: () => void;
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };
  const fontList = [
    'You can easily build cross-chain swaps, vaults and yield earning strategies?',
    'You can earn passive income by deploying smart contracts?',
    'You can pay gas fee in any token?',
    'You can pay a lower gas fee as a frequent DeFi protocol user?',
  ];
  const { isMobile } = useMobileDetect();
  const { theme, setTheme } = useTheme();
  const [count, setCount] = useState(0);
  const [hIndex, setHIndex] = useState(-1);
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const typingVal = useRef();
  useEffect(() => {
    typing(0);
  }, []);

  const typing = (index: number) => {
    let str = fontList[index];

    setCount(index);
    let i = 0;
    function typingFun() {
      if (i <= str.length) {
        // @ts-ignore
        typingVal.current.innerHTML = str.slice(0, i++) + '|';
        setTimeout(() => {
          typingFun();
        }, 100);
      } else {
        // @ts-ignore
        typingVal.current.innerHTML = str;
        setTimeout(_ => {
          typing(index < 3 ? index + 1 : 0);
        }, 1500);
      }
    }
    typingFun();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div
          ref={ref}
          className={cn(styles.featureWrapper, styles.hidden, {
            [`${styles.visible}`]: inView,
          })}
        >
          <div className={styles.featureContent}>
            <div
              className={cn(styles.title, styles.black, 'wow', 'bounceInUp')}
              data-wow-duration="2s"
              data-wow-delay="0s"
            >
              <span>What if...</span>
              <div className={cn(styles.typing)}>
                <span ref={typingVal}></span>
              </div>
            </div>
            {!!inView && (
              <div
                className={styles.topContent}
                onMouseLeave={() => setHIndex(-1)}
              >
                {features.map((feature, index) => (
                  <div
                    className={cn(
                      styles.topContentItem,
                      styles.black,
                      styles[feature.name],
                      hIndex === index && styles.hovered,
                      theme === 'dark' && styles.hoveredSakura,
                      'wow',
                      'bounceInUp',
                    )}
                    data-wow-duration="2s"
                    data-wow-delay="0s"
                    key={index}
                    onMouseEnter={() => setHIndex(index)}
                    onClick={() =>
                      feature.link !== 'scroll'
                        ? window.open(feature.link, 'blank')
                        : handleScroll()
                    }
                  >
                    <h3>{feature.title}</h3>
                    <img
                      className={styles.itemBack}
                      src={
                        theme && theme === 'dark'
                          ? feature.imageSakura
                          : feature.image
                      }
                      alt=""
                    />
                    {(isMobile() || hIndex === index) && (
                      <>
                        <p>{feature.content}</p>
                        <div className={styles.bar} />
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
