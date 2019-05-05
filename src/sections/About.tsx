import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './about.module.scss';
import SectionLayout from '../layout/Section';
import {BulletsBox} from '../components/BulletsBox';

const About: React.FunctionComponent = () => (
  <SectionLayout id="about">
    <h1>
      <Translated id="about-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="about-subheadline" />
    </p>
    <div className={styles.imageContainer}>
      <img src={require('../styling/images/scribble.png')} alt="store layout" />
    </div>
    <BulletsBox />
  </SectionLayout>
);

export default About;
