const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        historyApiFallback: true
    },

    entry: [
        './node_modules/formBuilder/dist/form-render.min.js',
        path.resolve(__dirname, 'client') + '/app/App.jsx'
    ],

    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    resolve : {
        alias: {
            'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            "jquery-ui": "jquery-ui",
            formBuilder: "formBuilder",
            formRender: "formRender"
        })
    ]
};
