const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        hot: true,
        open: true,
        host: "127.0.0.1"
    },
    devtool: "cheap-module-source-map",
    plugins: [
        //here your variables must be.
        new webpack.DefinePlugin({
            "process.env.subdirectory": JSON.stringify("")
        }),
        new ReactRefreshWebpackPlugin()
    ]
}