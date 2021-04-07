import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import styles from './CloverFeature.module.scss'

const Features = ({
  features = [],
  handleScroll,
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
  handleScroll?: () => void
}) => {
  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  }
  const fontList = [
    'You can easily build cross-chain swaps, vaults and yield earning strategies?',
    'You can earn passive income by deploying smart contracts?',
    'You can pay gas fee in any token?',
    'You can pay a lower gas fee as a frequent DeFi protocol user?',
  ];
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  const typingVal = useRef();
  useEffect(()=>{
    typing(0);
  }, []);

  const typing = (index: number)=> {
    let str = fontList[index];

    setCount(index);
    let i = 0;
    function typingFun(){
      if (i <= str.length) {
        // @ts-ignore
        typingVal.current.innerHTML = str.slice(0, i++) + '|';
        setTimeout(()=>{
          typingFun()
        },100)
      }
      else{
        // @ts-ignore
        typingVal.current.innerHTML = str;
        setTimeout(_ => {
          typing(index < 3 ? index + 1 : 0);
        },1500)
      }
    }
    typingFun();
  }

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
            <div className={cn(styles.title, styles.black, 'wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s">
              <span>What if...?</span>
              <div className={cn(styles.typing)}>
                <span ref={typingVal}></span>
              </div>
            </div>
            {!!inView && (
              <div>
                {features.map((feature, index) => (
                  <div
                    className={cn(
                      styles.topContentItem,
                      styles.black,
                      styles[feature.name],
                      'wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s"
                    key={index}
                  >
                    <h3>{feature.title}</h3>
                    <p className={styles.gray}>{feature.content}</p>
                    {feature.link !== 'scroll' ? (
                        <a href={feature.link} target="_blank">
                          {feature.btnText}
                        </a>
                    ) : (
                        <span onClick={handleScroll}>
                          {feature.btnText}
                        </span>
                    )}
                    {feature.img && <img src={feature.img} alt="" />}
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
