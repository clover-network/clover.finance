import React from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import CloverIcon from '../../public/svg/clvtoken.svg'
import Fees from '../../public/svg/fees.svg'
import Governance from '../../public/svg/governance.svg'
import Validation from '../../public/svg/validation.svg'
import Treasury from '../../public/svg/treasury.svg'
import Nomination from '../../public/svg/nomination.svg'
import Deployment from '../../public/svg/deployment.svg'

const ClvToken = ({
  clvTokens = [],
}: {
  clvTokens?: {
    title: string
    content: string
  }[]
}) => {
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
    <div className={cn(styles.wrapper,'wow', 'bounceInUp')} data-wow-duration="2s" data-wow-delay="0s">
      <div className={styles.bottomWrapper}>
        <div className={styles.clvToken}>
          <h3 className={styles.clvTokenTitle}>
            <CloverIcon className={styles.clvTokenIcon} />CLV Token
          </h3>
          <div className={styles.clvTokenList}>
            {clvTokens.map((token) => (
              <div className={styles.clvTokenItem} key={token.title}>
                {getImgByIcon(token.title)}
                <div>{token.title}</div>
                <p>{token.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClvToken
