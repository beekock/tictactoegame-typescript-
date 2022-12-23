import React from 'react';
import styles from './App.module.scss';

type Props = {
  value: string;
  onClick: () => void;
};
const Square: React.FC<Props> = (props) => {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
