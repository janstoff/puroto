import React from 'react';

import styles from './closeButton.module.scss';

export const CloseButton: React.FunctionComponent = ({onClick}) => (
  <a className={styles.closeButton} onClick={onClick}>
    <img src={require('../styling/icons/close.svg')} alt="close" />
  </a>
);
