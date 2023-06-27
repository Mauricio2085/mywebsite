const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js']
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [//MiniCssExtractPlugin.loader,
                'css-loader',
                ],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: '[name].[contenthash].html'
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'main.css'
        // }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: 'assets/images'
                }
            ]
        }),
        new CleanWebpackPlugin(),
    ],
    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    }
}

