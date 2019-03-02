import React from 'react'
import { FormattedMessage as Translated } from 'react-intl'

import AppLayout from '../layout/App'
import Landing from '../sections/Landing'
import Contact from '../sections/Contact'
import About from '../sections/About'
import LocalizedLink from '../components/LocalizedLink'

// if (typeof window !== 'undefined') {
// 	// Make scroll behavior of internal links smooth
// 	require('smooth-scroll')('a[href*="#"]')
// }

export default ({ pathContext: { locale } }): JSX.Element => (
	<AppLayout locale={locale}>
		<Landing />
		<About />
		<Contact />
		<LocalizedLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
			<Translated id="back-to-top-link" />
		</LocalizedLink>
	</AppLayout>
)
