// webpack.config.js
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    entry: './src/dinosaur.js',
    output: {
        filename: 'dinosaur.js',
        publicPath: 'http://localhost:3003/',
    },
    mode: 'development',
    devServer: {
        // Using `static` instead of `contentBase`? 
        // What does this mean?
        static: './dist', 
        port: 3003,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dinosaur',
            filename: 'remoteEntry.js',
            exposes: {
                './Module': './src/dinosaur.js',
            },
        }),
    ],
};
