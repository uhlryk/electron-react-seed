/**
 * Webpack config for production electron main process
 */

import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
    devtool: "source-map",

    target: "electron-main",

    entry: "./src/desktop/main.dev",

    output: {
        path: path.join(__dirname, "dist/desktop"),
        filename: "main.prod.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json"],
        modules: [path.join(__dirname, "src/desktop"), "node_modules"]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: process.env.OPEN_ANALYZER === "true" ? "server" : "disabled",
            openAnalyzer: process.env.OPEN_ANALYZER === "true"
        }),

        new webpack.EnvironmentPlugin({
            NODE_ENV: "production",
            DEBUG_PROD: "false"
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            inject: false,
            template: "src/desktop/template.html",
            filename: "app.html"
        })
    ],

    /**
     * Disables webpack processing of __dirname and __filename.
     * If you run the bundle in node.js it falls back to these values of node.js.
     * https://github.com/webpack/webpack/issues/2010
     */
    node: {
        __dirname: false,
        __filename: false
    }
};
