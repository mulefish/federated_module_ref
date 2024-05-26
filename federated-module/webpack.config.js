// webpack.config.js
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/module.js',
    output: {
        filename: 'module.js',
        publicPath: 'http://localhost:3002/',
        library: { type: 'var', name: 'module1' },
    },
    mode: 'development',
    devServer: {
        static: './dist', // Updated line
        port: 3002,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'module1',
            filename: 'remoteEntry.js',
            exposes: {
                './Module': './src/module.js',
            },
        }),
    ],
};
