import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
    devtool: "source-map",
    target: "electron-renderer",
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [path.join(__dirname, "app"), "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.global\.css$/,
                use: ExtractTextPlugin.extract({
                    publicPath: "./",
                    use: {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    },
                    fallback: "style-loader"
                })
            },
            // Pipe other styles through css modules and append to style.css
            {
                test: /^((?!\.global).)*\.css$/,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            minimize: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]__[hash:base64:5]"
                        }
                    }
                })
            },
            // Add SASS support  - compile all .global.scss files and pipe it to style.css
            {
                test: /\.global\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [path.resolve(__dirname, "./node_modules/")]
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            // Add SASS support  - compile all other .scss files and pipe it to style.css
            {
                test: /^((?!\.global).)*\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                minimize: true,
                                importLoaders: 1,
                                localIdentName: "[name]__[local]__[hash:base64:5]"
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [path.resolve(__dirname, "./node_modules/")]
                            }
                        }
                    ]
                })
            },
            // WOFF Font
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            // WOFF2 Font
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff"
                    }
                }
            },
            // TTF Font
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/octet-stream"
                    }
                }
            },
            // EOT Font
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: "file-loader"
            },
            // SVG Font
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "image/svg+xml"
                    }
                }
            },
            // Common Image Formats
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: "url-loader"
            }
        ]
    }
};
