import React from 'react'
import cn from 'classnames'
import {InView} from 'react-intersection-observer'
import {useLottie} from 'lottie-react'
import animationJson from './animation.json'
import styles from './GetStarted.module.scss'
import Button from "../Button/Button";

const GetStarted = () => {
  const options = {
    animationData: animationJson,
    loop: true,
    autoplay: true,
  }
  const { View } = useLottie(options)
  return (
    <InView threshold={0} triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={cn(styles.wrapper, styles.hidden, {
            [`${styles.visible}`]: inView,
          })}
        >
          <div className={styles.textOuter}>
            <p className={styles.textInner}>
              A&nbsp;Foundational Layer for Cross&#8209;chain Compatibility
            </p>
          </div>
          <div className={styles.animation}>{View}</div>
          <Button
              className={styles.btn}
              href="https://docs.clover.finance/quick-start/testnet/"
          >
            Start building
          </Button>
        </div>
      )}
    </InView>
  )
}

export default GetStarted
