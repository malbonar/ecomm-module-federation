const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    plugins: [
        new ModuleFederationPlugin({
            name: 'shoppingcart',
            filename: 'remoteEntry.js',
            exposes: {
                './Cart': './src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        port: 5003,
        open: true
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}