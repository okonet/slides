var path = require("path");
var webpack = require("webpack");

var cssLoaders = ['style', 'css', 'autoprefixer-loader?browsers=last 2 version'];
cssLoaders = cssLoaders.join('!');

module.exports = {
    name: "React-hot Example",
    entry: {
        main: "./index.js",
        //ball: "./ball/index.js",
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        chunkFilename: "[name].[id].js"
    },
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ["react-hot", "babel-loader?experimental"],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: cssLoaders
            },
            {
                test: require.resolve("react"),
                loader: "expose?React"
            }
        ]
    },
    resolve: {
        root: path.join(__dirname),
        modulesDirectories: ["node_modules", "bower_components", "web_modules"],
        extensions: ["", ".js", ".jsx", ".css"]
    }
};
