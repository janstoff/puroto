import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './bulletsBox.module.scss';

const AUDIENCES: string[] = ['consumer', 'b2b'];

export const BulletsBox = () => (
  <div className={styles.container}>
    {AUDIENCES.map(audience => (
      <div key={audience} className={styles.bullets}>
        <p
          style={
            audience === 'consumer'
              ? {color: 'rgb(94, 75, 126)'}
              : {color: 'rgb(159, 75, 111)'}
          }
        >
          <Translated id={`about-bullet-${audience}-headline`} />
        </p>
        <ul>
          <li>
            <Translated id={`about-bullet-${audience}-1`} />
          </li>
          <li>
            <Translated id={`about-bullet-${audience}-2`} />
          </li>
          <li>
            <Translated id={`about-bullet-${audience}-3`} />
          </li>
        </ul>
      </div>
    ))}
  </div>
);
