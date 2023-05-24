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
            exclude: /node_modules/,
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
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ResourceHintWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 2
                }
            }
        },
        moduleIds: 'deterministic'
    }
};
