module.exports = {
	runtimeCompiler: true,
	productionSourceMap: false,
	publicPath: process.env.NODE_ENV === 'production'
	  ? './' : '/',
	  //? '/' : '/',

	css: {
		extract: false,
	},
	configureWebpack: {
		output: {
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].js'
		},
		optimization: {
			namedChunks: true,
			splitChunks: false,
		}
	}
}
