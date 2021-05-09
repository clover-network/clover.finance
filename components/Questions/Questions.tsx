import React, { useState } from 'react';
import cn from 'classnames';

import styles from './Questions.module.scss';

const QuestionItem = (props: {
  index: string;
  title: string;
  description: string;
}) => {
  const { index, title, description } = props;
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <p>
          <span>{index}</span>&nbsp; {title}
        </p>

        <div className={styles.handle}>
          {opened ? (
            <svg
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpened(false)}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 2H0V0H18V2Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setOpened(true)}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 10L8 18H10V10H18V8H10V0H8L8 8H0V10H8Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          )}
        </div>
      </div>
      {opened && <p className={styles.description}>{description}</p>}
    </div>
  );
};

const Questions = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Frequently Asked Questions </h1>
      <QuestionItem
        index="01"
        title={'Is Clover an ERC-20 token?'}
        description="The Clover token is not an ERC-20 currently. Once we have launched and the bridges connecting Polkadot to Ethereum are up-and-running, it will be possible to move Clover and other tokens on Clover to Ethereum as ERC-20s."
      />
    </div>
  );
};

export default Questions;
