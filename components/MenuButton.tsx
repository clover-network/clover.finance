import React from 'react';
import cn from 'classnames';
import styles from '../styles/MenuButton.module.scss';

const MenuButton = ({
  className,
  onClick,
  active = false,
}: {
  className?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => (
  <button
    type="button"
    className={cn(styles.button, className, {
      [`${styles.buttonActive}`]: active,
    })}
    onClick={onClick}
  >
    <i className={styles.icon} />
  </button>
);

export default MenuButton;
