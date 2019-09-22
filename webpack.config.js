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
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg)$/,
                include: [path.resolve(__dirname, './src')],
                loader: 'svg-inline-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, './src/view/components'),
            colors: path.resolve(__dirname, './src/view/colors'),
            config: path.resolve(__dirname, './src/view/config'),
            pages: path.resolve(__dirname, './src/view/pages'),
            texts: path.resolve(__dirname, './src/view/texts'),
            css: path.resolve(__dirname, './src/css'),
            store: path.resolve(__dirname, './src/store'),
            helpers: path.resolve(__dirname, './src/view/helpers'),
            utils: path.resolve(__dirname, './src/view/utils'),
            icons: path.resolve(__dirname, './src/assets/icons/index')
        }

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}