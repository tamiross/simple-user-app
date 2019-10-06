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
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
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
            assets: path.resolve(__dirname, './src/assets'),
            icons: path.resolve(__dirname, './src/assets/icons/index'),
            texts: path.resolve(__dirname, './src/view/texts'),
            css: path.resolve(__dirname, './src/css'),
            store: path.resolve(__dirname, './src/store'),
            helpers: path.resolve(__dirname, './src/view/helpers'),
            utils: path.resolve(__dirname, './src/view/utils')
        }

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}