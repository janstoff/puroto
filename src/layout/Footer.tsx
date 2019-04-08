import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import { SECTIONS } from '../config'
import styles from './footer.module.scss'
import LocalizedLink from '../components/LocalizedLink'
import CompanyModal from '../components/CompanyModal'

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
		<div className={styles.main}>
			<div className={styles.logoWrapper}>
				<LocalizedLink to="/">
					<img
						src={require('../styling/icons/Logo_vektor_rot.png')}
						alt="Home"
					/>
				</LocalizedLink>
			</div>
			<div className={styles.navWrapper}>
				<div className={styles.navigation}>{renderSectionLinks(SECTIONS)}</div>
			</div>
		</div>
		<div className={styles.disclaimerWrapper}>
			<div className={styles.disclaimerText}>
				<Translated id="footer-copyright" />
				<Translated id="footer-general-disclaimer" />
				<Translated id="footer-link-disclaimer" />
			</div>
		</div>
		<div>
			<CompanyModal />
		</div>
	</footer>
)

export default Footer
