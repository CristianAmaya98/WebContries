const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPulgin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /app.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /app.css$/,
                use: [MiniCssExtractPulgin.loader, 'css-loader']
            }
        ],
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebContries',
            template: './src/index.html'
        }),
        new MiniCssExtractPulgin({
            filename: '[name].css',
            ignoreOrder: false
        })

    ]
}