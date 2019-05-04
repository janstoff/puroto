import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import styles from './about.module.scss'
import SectionLayout from '../layout/Section'

const About: React.FunctionComponent = () => (
	<SectionLayout id="about">
		<h1>
			<Translated id="about-headline" />
		</h1>
		<p className={styles.body}>
			<Translated id="about-body" />
		</p>
		<div className={styles.imageContainer}>
			<img src={require('../styling/images/scribble.png')} alt="store layout" />
		</div>
	</SectionLayout>
)

export default About
