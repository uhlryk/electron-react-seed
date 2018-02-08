import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import webpack from "webpack";

export default {
    entry: {
        app: "./src/frontend/index.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Hot Module Replacement"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
