import React from 'react'
import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import styles from './CloverDNA.module.scss'
import Vector1 from '../../public/svg/vector1.svg'
import Vector2 from '../../public/svg/vector2.svg'
import CloverIcon from '../../public/svg/clover_icon.svg'
import Fees from '../../public/svg/fees.svg'
import Governance from '../../public/svg/governance.svg'
import Validation from '../../public/svg/validation.svg'
import Treasury from '../../public/svg/treasury.svg'
import Nomination from '../../public/svg/nomination.svg'
import Deployment from '../../public/svg/deployment.svg'
import Button from '../Button/Button'

const DnaAndFeatures = ({
  dnas = [],
  features = [],
  clvTokens = [],
}: {
  dnas?: {
    title: string
    content: string
    btnText: string
    link: string
  }[]
  features?: {
    title: string
    content: string
    btnText: string
    link: string
  }[]
  clvTokens?: {
    title: string
    content: string
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

  const getImgByIcon = (token) => {
    switch (token.toLowerCase()) {
      case 'opt-in fees':
        return <Fees width={48} height={33} />
      case 'governance':
        return <Governance width={48} height={33} />
      case 'validation':
        return <Validation width={48} height={33} />
      case 'treasury':
        return <Treasury width={48} height={33} />
      case 'nomination':
        return <Nomination width={48} height={33} />
      case 'deployment':
        return <Deployment width={48} height={33} />
    }
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.line} src="/images/line.jpg" alt="" />
      <div ref={ref} className={styles.topWrapper}>
        <div className={styles.topContent}>
          <span className={styles.title}>Clover's DNA</span>
          {!!inView && (
            <div className={styles.contentBox}>
              {dnas.map((dna) => (
                <div className={styles.topContentItem} key={dna.title}>
                  <div>
                    <h3>{dna.title}</h3>
                    <p>{dna.content}</p>
                  </div>
                  <Button onClick={() => window.open(dna.link)}>
                    {dna.btnText}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <img src="/images/line2.png" className={styles.line2} alt=""/>
    </div>
  )
}

export default DnaAndFeatures
