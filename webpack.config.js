const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_boundle.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, './src/view/components'),
            '@colors': path.resolve(__dirname, './src/view/colors'),
            '@pages': path.resolve(__dirname, './src/view/pages'),
            '@css': path.resolve(__dirname, './src/css'),
            '@store': path.resolve(__dirname, './src/store')
        }

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}