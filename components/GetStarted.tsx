import React from 'react'
import cn from 'classnames'
import { InView } from 'react-intersection-observer'
// import { useLottie } from 'lottie-react'
// import Button from './Button'
// import animationJson from '../public/animation.json'
import { Banner } from './Banner'
import { Introduction } from './Introduction'
import styles from '../styles/GetStarted.module.scss'

const GetStarted = () => {
  // const options = {
  //   animationData: animationJson,
  //   loop: true,
  //   autoplay: true,
  // }
  // const { View } = useLottie(options)
  return (
    <InView threshold={0} triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={cn(styles.wrapper, styles.hidden, {
            [`${styles.visible}`]: inView,
          })}
        >
          {/* <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div> */}
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
        </div>
      )}
    </InView>
  )
}

export default GetStarted
