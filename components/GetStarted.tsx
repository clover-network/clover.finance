import React from 'react';
import cn from 'classnames';
import { useLottie } from 'lottie-react';
import { InView } from 'react-intersection-observer';
import Button from './Button';
import styles from '../styles/GetStarted.module.scss';
import animationJson from '../public/animation.json';

const GetStarted = () => {
  const options = {
    animationData: animationJson,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <InView threshold={0} triggerOnce>
      {({ inView, ref}) => (
        <div
          ref={ref}
          className={cn(styles.wrapper, styles.hidden, {
            [`${styles.visible}`]: inView,
          })}
        >
          <h1 className={styles.title}>
            A&nbsp;Foundational Layer for Cross&#8209;chain Compatibility
          </h1>
          <div className={styles.animation}>
            {View}
          </div>
          <Button
            className={styles.btn}
            href="https://docs.clover.finance/quick-start/testnet/"
          >
            Start building
          </Button>
          <p className={styles.text}>
            Clover is&nbsp;built&nbsp;for Polkadot, committed to&nbsp;providing easy&#8209;to&#8209;use blockchain
            infrastructure and creating a&nbsp;one&#8209;stop EVM compatible framework for Substrate&#8209;based applications.
          </p>
        </div>
      )}
    </InView>
  );
};

export default GetStarted;
