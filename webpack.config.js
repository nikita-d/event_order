var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextWebpackPlugin('[name].css', { allChunks: true });
var extractStyl = new ExtractTextWebpackPlugin('[name].styl');

module.exports = {
    devtool: 'sourcemap',
    context: __dirname + '/client',
    entry: { app: ['./client/app/app.js'] },
    module: {
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { test: /\.css$/, loader: extractCSS.extract('style!css!') }
        ]
    },
    resolve: {
        modulesDirectories: ['../node_modules'],
        extensions: ['', '.js', '.css']
    },
    plugins: [
        extractCSS,
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        }),
    ]
};
