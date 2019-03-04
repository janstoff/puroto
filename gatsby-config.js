module.exports = {
	pathPrefix: '/puroto',
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Selected Gadgets',
				short_name: 'SG',
				start_url: '/',
				background_color: '#353434',
				theme_color: '#353434',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				// icon: 'src/images/icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
	],
}
