var webpack = require('webpack');
var path = require('path');
require('dotenv').config();

var APP_DIR   = path.resolve(__dirname, 'src/client/app');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

var config = {
	entry: APP_DIR + '/init.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
		  'process.env': {
		    'FLICKRAPIKEY': JSON.stringify(process.env.FLICKRAPIKEY)
		  }
		})
	],
	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		}]
	}
};

module.exports = config;
