import React, { useMemo } from 'react';
import cn from 'classnames';
import { InView } from 'react-intersection-observer';
import styles from './Blocks.module.scss';
import { BLOCKS_ICONS } from '../../constants';
import polkadotIcon from '../../public/svg/polkadot.svg';
import scheduleIcon from '../../public/svg/schedule.svg';
import incomeIcon from '../../public/svg/income.svg';
import noFeeIcon from '../../public/svg/noFee.svg';

const iconsMap = {
  [`${BLOCKS_ICONS.polkadot}`]: polkadotIcon,
  [`${BLOCKS_ICONS.schedule}`]: scheduleIcon,
  [`${BLOCKS_ICONS.income}`]: incomeIcon,
  [`${BLOCKS_ICONS.nofee}`]: noFeeIcon,
};

const Blocks = ({
  className,
  items = [],
}: {
  className?: string;
  items?: {
    icon: keyof typeof iconsMap;
    text: string;
  }[];
}) => {
  const data = useMemo(() => (
    items?.map(({ icon, text}, index) => {
      const IconComponent = iconsMap[icon];
      return (
        <li key={icon} className={styles.item}>
          <InView threshold={0.5} delay={index * 100} triggerOnce>
            {({ inView, ref}) => (
              <div
                ref={ref}
                className={cn(styles.hidden, {
                  [`${styles.visible}`]: inView,
                })}
              >
                <i className={styles.icon}>
                  <IconComponent />
                </i>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            )}
          </InView>
        </li>
      );
    })
  ), [items]);
  if (data.length) {
    return (
      <div className={cn(styles.wrapper, className)}>
        <ul className={styles.list}>{data}</ul>
      </div>
    );
  }
  return null;
};

export default Blocks;
