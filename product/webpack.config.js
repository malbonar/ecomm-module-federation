const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 5001,
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
    },
    plugins: [
        // this is exposing the script file so that it can be consumed as a remote
        new ModuleFederationPlugin({
            // this name here must match the name on the right hand side of the remote url mapping in the container webpack config
            // e.g. 'products@http://localhost...'
            name: 'products',
            // name of the manuifest file, typically always leave this as the default remoteEntry.js
            filename: 'remoteEntry.js',
            exposes: {
                // url container path mapped to local js file
                './ProductsIndex': './src/bootstrap'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};