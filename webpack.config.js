const webpack = require('webpack');
const path = require('path');

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js'
})

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
	    admin: './admin.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
	        loader: ['style-loader', 'css-loader','sass-loader']
	    }, {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', {modules: false }]
                    ]
                }
            }]
        }, {
	        test: /\.(png|jpg)$/,
	        use: [{
	            loader: 'url-loader',
		        options: { limit: 10000 } //convert images < 10k to base64 strings
	        }]

	    }]
    },
    plugins: [
        extractCommons,
	    new webpack.NamedModulesPlugin()
    ]
}

module.exports = config;
