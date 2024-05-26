const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:3001/',
    },
    mode: 'development',
    devServer: {
        static: './dist', // Updated line
        port: 3001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                module1: 'module1@http://localhost:3002/remoteEntry.js',
            },
        }),
    ],
};
