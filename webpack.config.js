const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { resolve } = require('path');

module.exports = {
    entry: '/src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        host: 'localhost',
        port: 8081,

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    }


                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html'), filename: 'index.html', }),
        new MiniCssExtractPlugin({ linkType: 'text/css', filename: 'style.css' }),
    ]

}