const path = require('path');

module.exports = {
	mode: "development",
	entry: [
		"./resources/assets/js/app.js", 
		"./resources/assets/js/coba.js",
		"./resources/assets/sass/app.scss",
		"font-awesome/scss/font-awesome.scss"
	],
	output: {
		path: __dirname + "/public/assets/js/",
		filename: "bundle.js",
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: [
				path.resolve(__dirname, "node_modules")
			],
			loader: 'babel-loader',
			options: {
				presets: ['es2015']
			}
		}, {
	    test: /\.(scss)$/,
	    use: [{
	      loader: 'style-loader', // inject CSS to page
	    }, {
	      loader: 'css-loader', // translates CSS into CommonJS modules
	    }, {
	      loader: 'sass-loader' // compiles Sass to CSS
	    }]
	  }, {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000',
    }, {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: 'file-loader',
    }, {
		  test: /font-awesome\.config\.js/,
		  use: [
		    { loader: 'style-loader' },
		    { loader: 'font-awesome-loader' }
		  ]
		}]
	}
}