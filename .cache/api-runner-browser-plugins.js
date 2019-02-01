module.exports = [
  {
    plugin: require('/home/david/dev/oregand/Oregand.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
    options: { plugins: [] }
  },
  {
    plugin: require('/home/david/dev/oregand/Oregand.github.io/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
    options: { plugins: [] }
  },
  {
    plugin: require('/home/david/dev/oregand/Oregand.github.io/node_modules/gatsby-plugin-typography/gatsby-browser.js'),
    options: { plugins: [], pathToConfigModule: 'src/utils/typography' }
  },
  {
    plugin: require('/home/david/dev/oregand/Oregand.github.io/gatsby-browser.js'),
    options: { plugins: [] }
  }
]
