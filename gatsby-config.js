module.exports = {
  pathPrefix: '/puroto',
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/styling/global.scss', 'src/styling/colors.scss']
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'puroto',
        short_name: 'po',
        start_url: '/',
        background_color: '#353434',
        theme_color: '#353434',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
};
