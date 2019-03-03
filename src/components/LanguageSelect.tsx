import React, { Fragment } from 'React'

import styles from './languageSelect.module.scss'
import locales from '../config/locales'
import { Link } from 'gatsby'

interface LanguageSwitchProps {
	readonly locale: string
}

const LanguageSwitch: React.SFC<LanguageSwitchProps> = ({
	locale,
}: LanguageSwitchProps) => {
	const languageOptions = Object.keys(locales)

	return (
		<div className={styles.languageSwitchContainer}>
			{languageOptions.map(language => (
				<Link
					key={language}
					className={
						language === locale ? styles.switchBtnActive : styles.switchBtn
					}
					style={{ textDecoration: 'none' }}
					to={language === 'de' ? '/' : '/en/'}
				>
					{language}
				</Link>
			))}
		</div>
	)
}

export default LanguageSwitch
