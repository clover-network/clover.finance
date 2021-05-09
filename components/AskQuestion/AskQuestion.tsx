import React from 'react';
import Button from '../Button/Button';

import styles from './AskQuestion.module.scss';

const AskQuestion = () => {
  return (
    <div className={styles.content}>
      <h1>Ask a question</h1>
      <textarea placeholder="Your question..." />
      <input placeholder="Your e-mail..." />
      <Button>Submit</Button>
    </div>
  );
};

export default AskQuestion;
