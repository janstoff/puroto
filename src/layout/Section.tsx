import React from 'react';

import styles from './section.module.scss';

export interface SectionProps {
  id: string;
  children: any;
}

const SectionLayout = ({id, children}: SectionProps) => (
  <section id={id} className={styles.section}>
    {children}
  </section>
);

export default SectionLayout;
