import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from '../styles/Blocks.module.scss';
import { BLOCKS_ICONS } from '../constants';
import polkadotIcon from "../public/polkadot.svg";
import scheduleIcon from "../public/schedule.svg";
import incomeIcon from "../public/income.svg";
import noFeeIcon from "../public/noFee.svg";

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
    items?.map(({ icon, text}) => {
      const IconComponent = iconsMap[icon];
      return (
        <li key={icon} className={styles.item}>
          <i className={styles.icon}>
            <IconComponent />
          </i>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
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
