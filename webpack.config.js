/**
 * Created by 1jiaqi3 on 3/6/2017.
 */
let path =      require("path"),
    webpack =   require("webpack");


module.exports = {
    cache: true,
    //debug: true,
    devtool: 'source-map',
    context: path.join(__dirname, "./src/client"),
    entry: {
        main: "./main"
    },
    output: {
        path: "./public/js/",
        filename: "[name].js",
        chunkFilename: "[id].js",
        sourceMapFilename: "[name].map",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            // required to write "require('./style.css')"
            { test: /\.css$/, loader: "style-loader" },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            { test: /\.png$/,  loader: "url-loader?limit=100000" },

            // required for bootstrap icons
            { test: /\.(woff|woff2)$/,  loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
            { test: /\.ttf$/,           loader: "file-loader?prefix=font/" },
            { test: /\.eot$/,           loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,           loader: "file-loader?prefix=font/" },

            // required for ES6 and react-jsx
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets:['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "_":        "underscore",
            "$":        "jquery",
            "jQuery":   "jquery",
            "Backbone": "backbone",
            "md5":      "md5"
        })
    ]
};
