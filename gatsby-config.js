require("dotenv").config(
  { 
    encoding: "ucs2",
    path: `.env.${process.env.NODE_ENV}`
  }
);

module.exports = {
  siteMetadata: {
    siteName: 'PELIS APP',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'Y2I2YWYzYTktOGIxMS00OTFmLWFiZWUtNWY4MTdiY2RiYzVmNjM3MzgxMjg2NzMwNjUxMDU0',
        autopop: true
      }
    },
  ],
}