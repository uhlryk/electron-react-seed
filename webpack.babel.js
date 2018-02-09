import path from "path";
import CleanWebpackPlugin from "clean-webpack-plugin";
import webpack from "webpack";

const PORT = 1212;
const PUBLIC_PATH = `http://localhost:${PORT}/`;
const DIST_NAME = "dist";
const DIST_PATH = PUBLIC_PATH + DIST_NAME;
export default {
    entry: [
        "react-hot-loader/patch",
        `webpack-dev-server/client?${PUBLIC_PATH}`,
        "webpack/hot/only-dev-server",
        path.join(__dirname, "src/frontend/index.js")
    ],
    devtool: "inline-source-map",
    target: "electron-renderer",
    devServer: {
        port: PORT,
        publicPath: DIST_PATH,
        compress: true,
        noInfo: true,
        stats: "errors-only",
        inline: true,
        lazy: false,
        hot: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        contentBase: path.join(__dirname, DIST_NAME),
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [new CleanWebpackPlugin([DIST_NAME]), new webpack.HotModuleReplacementPlugin({})],
    output: {
        publicPath: DIST_PATH,
        filename: "renderer.dev.js"
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
