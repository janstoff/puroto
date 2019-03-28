import React from 'react'

import AppLayout from '../layout/App'

export default ({ pathContext: { locale } }): JSX.Element => (
	<AppLayout locale={locale}>Hello World</AppLayout>
)
