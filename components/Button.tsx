import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import styles from '../styles/Button.module.scss';
import Arrow from '../public/arrow.svg';

const Button = ({
  children,
  className,
  href,
  type = 'button',
  disabled,
  ...restProps
}: {
  children?: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
  href?: string;
  disabled?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      className={cn(className, styles.btn)}
      {...(href ? { href, target: '_blank' } : { type })}
      disabled={href ? undefined : disabled}
      tabIndex={disabled ? -1 : undefined}
      {...restProps}
    >
      {children}
      <i className={styles.icon}>
        <Arrow />
      </i>
    </Component>
  );
};

export default Button;
