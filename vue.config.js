const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      //...
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: [ '/', '/about', '/some/deep/nested/route' ],
    })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/scss/abstracts/*.scss'),
      ]
    }
  },
  chainWebpack: config => {
		config.module
			.rule('glsl')
			.test(/\.glsl$/)
			.use('navinfo-webpack-glsl-loader')
			.loader('navinfo-webpack-glsl-loader')
			.end()
	}
}