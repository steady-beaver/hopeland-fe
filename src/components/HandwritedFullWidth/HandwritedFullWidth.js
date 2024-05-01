import React from 'react';
import styles from './HandwritedFullWidth.module.scss';

const HandwritedFullWidth = ({ text }) => {
  return <div className={`${styles.main}`}>{text}</div>;
};

export default HandwritedFullWidth;
