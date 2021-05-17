import React from 'react';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import styles from './index.module.scss';
import CloverIcon from '../../public/svg/clvtoken.svg';
import SacIcon from '../../public/svg/sactoken.svg';
import Fees from '../../public/svg/fees.svg';
import Governance from '../../public/svg/governance.svg';
import Validation from '../../public/svg/validation.svg';
import Treasury from '../../public/svg/treasury.svg';
import Nomination from '../../public/svg/nomination.svg';
import Deployment from '../../public/svg/deployment.svg';

const ClvToken = ({
  clvTokens = [],
}: {
  clvTokens?: {
    title: string;
    content: string;
  }[];
}) => {
  const { theme } = useTheme();
  const getImgByIcon = token => {
    switch (token.toLowerCase()) {
      case 'opt-in fees':
        return <Fees width={35} height={35} />;
      case 'governance':
        return <Governance width={48} height={33} />;
      case 'validation':
        return <Validation width={42} height={32} />;
      case 'treasury':
        return <Treasury width={40} height={40} />;
      case 'nomination':
        return <Nomination width={42} height={32} />;
      case 'deployment':
        return <Deployment width={38} height={40} />;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.bottomWrapper}>
        <div className={styles.clvToken}>
          <h3
            className={cn(styles.clvTokenTitle, 'wow', 'bounceInUp')}
            data-wow-duration="2s"
            data-wow-delay="0s"
          >
            {theme && theme === 'dark' ? (
              <SacIcon className={styles.clvTokenIcon} />
            ) : (
              <CloverIcon className={styles.clvTokenIcon} />
            )}
            <p>{theme && theme === 'dark' ? 'SKU Token' : 'CLV Token'}</p>
          </h3>
          <div className={styles.clvTokenList}>
            {clvTokens.map(token => (
              <div
                className={cn(styles.clvTokenItem, 'wow', 'bounceInUp')}
                data-wow-duration="2s"
                data-wow-delay="0s"
                key={token.title}
              >
                {getImgByIcon(token.title)}
                <div>{token.title}</div>
                <p>{token.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClvToken;
