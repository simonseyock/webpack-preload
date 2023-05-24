const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        app: './index.ts'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules|\.d\.ts$|__mocks__/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ResourceHintWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'node_vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                },
                common: {
                    name: 'common',
                    test: /[\\/]src[\\/]/,
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2
                }
            }
        },
        moduleIds: 'deterministic',
        runtimeChunk: {
            name: 'manifest'
        }
    }
};
