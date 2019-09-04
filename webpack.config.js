const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_boundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}