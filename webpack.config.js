var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

new webpack.DefinePlugin({
	"progress.env": {
		NODE_ENV: JSON.stringify("production")
	}
});

module.exports = {
	devtool: false,
	entry: {
		vendor: ['react', 'react-dom', 'react-router'],
		app: ['./index.js']
	},
	output: {
		path: path.join(__dirname, 'dist'),		//出口文件，生成一个dist打包后的文件都在这里
		publicPath: '/dist/',
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[id].bundle.js'
	},

	module: {
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react'],
					//antd 按需加载配置
					"plugins":[
                        [
                        "import",{
                        	"libraryName":"antd",
					    	"libraryDirectory": "lib",
                        	"style":true}
                        ]
                    ]
                }
			}, 
			{
				test: /\.css$/,
				// loader: 'style-loader!css-loader!less-loader?module'
				// loader: ExtractTextPlugin.extract("style-loader", "css-loader")
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
			},{
				test: /\.less$/,
				// loader: 'style-loader!css-loader!less-loader?module'
				loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] })
			},{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
			}, {
				test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
				loader: 'file-loader?name=./font/[name].[ext]',
			}

		]
	},
	plugins: [
		new webpack.optimize.MinChunkSizePlugin({
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		})
		
	]
};