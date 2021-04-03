import React from 'react'
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import styles from './CloverFeature.module.scss'

const Features = ({
  features = [],
}: {
  features?: {
    title?: string
    content?: string
    btnText?: string
    link?: string
    img?: string
    name?: string
    index?: number
  }[]
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  }
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

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
            <div className={cn(styles.title, styles.black)}>
              <span>What if...?</span>
              <span>
                You would pay lower gas fees if you are a frequent user of a
                DeFi protocol?
              </span>
            </div>
            {!!inView && (
              <div>
                {features.map((feature, index) => (
                  <div
                    className={cn(
                      styles.topContentItem,
                      styles.black,
                      styles[feature.name]
                    )}
                    key={index}
                  >
                    <h3>{feature.title}</h3>
                    <p className={styles.gray}>{feature.content}</p>
                    <a href={feature.link} target="_blank">
                      {feature.btnText}
                    </a>
                    <img src={feature.img} alt="" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src="/images/background-clip.png" alt="" width="100%" />
    </>
  )
}

export default Features
