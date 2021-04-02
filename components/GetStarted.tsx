import React from 'react'
import cn from 'classnames'
import { useLottie } from 'lottie-react'
import { InView } from 'react-intersection-observer'
// import Button from './Button'
import styles from '../styles/GetStarted.module.scss'
import animationJson from '../public/animation.json'
import { Banner } from './Banner'
import { Introduction } from './Introduction'

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
          <h1 className={styles.title}>
            A&nbsp;Foundational Layer for Cross&#8209;chain Compatibility
          </h1>
          <Banner />
          {/* <div className={styles.animation}>{View}</div> */}

          <div className={styles.textOuter}>
            <p className={styles.textInner}>
              Simultaneously navigate and transact with major networks.
            </p>
            <p className={cn(styles.textInner, styles.green)}>
              All in one overview!
            </p>
          </div>
          <Introduction />
          {/* <Button
            className={styles.btn}
            href="https://docs.clover.finance/quick-start/testnet/"
          >
            Start building
          </Button>*/}
        </div>
      )}
    </InView>
  )
}

export default GetStarted
