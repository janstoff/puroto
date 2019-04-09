import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

import styles from './socialIcons.module.scss'

interface SocialLink {
	name: string
	iconName: string
	linkTo: string
}

interface SocialLinksProps {
	socialLinks: SocialLink[]
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({
	socialLinks,
}: SocialLinksProps) => (
	<div className={styles.container}>
		{socialLinks.map(socialLink => (
			<a
				key={socialLink.name}
				className={styles.socialIcon}
				href={socialLink.linkTo}
			>
				<img
					src={require(`../styling/icons/${socialLink.iconName}`)}
					alt={`${socialLink.name}`}
				/>
			</a>
		))}
	</div>
)

export default SocialLinks
