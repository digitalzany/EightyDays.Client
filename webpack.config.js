var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        app: [
            "./src/index.js"
        ],
        vendors: [
            "babel-polyfill",
            "es5-shim",
            "es5-shim/es5-sham",
            "console-polyfill",
            "fetch-ie8",
            "history",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "redux",
            "react-router-redux",
            "redux-thunk"
        ]
    },
    resolve: {
        root: [
            path.resolve('.'),
            path.resolve('./node_modules')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: "eval-source-map",
    externals: {
            "uiconfig": "uiconfig"
    },
    module: {
        loaders:[
        {
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'stage-0', 'es2015-loose'], //loose mode for IE8
                plugins: [
                    'transform-es2015-modules-commonjs', //for class inheritance transpilation
                    'transform-es2015-parameters', //for class inheritance transpilation
                    'transform-es2015-destructuring' //for class inheritance transpilation
                ]
            }
        }],
        postLoaders: [
        {
            test: /\.js$/,
            loader: 'es3ify' //IE8
        }]
    }
}