const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 5000,
        open: true
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [ 
                    { loader: 'style-loader'},
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            // name not req in container, only remotes. Added here for clarity
            name: 'container',
            // lists projects the container can access to gain extra code
            remotes: {
                // ModuleFederationPlugin entry in remote app
                // products@ name here must match the name property above from the product webpack config file
                // loads the file at specified url if anything in container has import like "import abc from 'products';"
                shoppingcart: 'shoppingcart@http://localhost:5003/remoteEntry.js',
                products: 'products@http://localhost:5001/remoteEntry.js',
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
}