import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import { SECTIONS } from '../config'
import styles from './footer.module.scss'
import LocalizedLink from '../components/LocalizedLink'

const renderSectionLinks = (sections: string[]) => (
	<ul>
		{sections.map(section => (
			<li>
				<LocalizedLink className={styles.link} to={`/#${section}`}>
					<Translated id={`${section}-header`} />
				</LocalizedLink>
			</li>
		))}
	</ul>
)

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.logoBox}>
			<LocalizedLink to="/">
				<img
					src={require('../styling/images/Logo_vektor_rot.png')}
					alt="Home"
				/>
			</LocalizedLink>
		</div>
		<div className={styles.main}>
			<div className={styles.elementWrapper}>
				<div className={styles.navigation}>{renderSectionLinks(SECTIONS)}</div>
			</div>
			<div className={styles.elementWrapper}>
				<div className={styles.copyright}>
					<Translated id="footer-copyright" />
					<Translated id="footer-general-disclaimer" />
					<Translated id="footer-link-disclaimer" />
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
