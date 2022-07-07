const path = require("path") 
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isDevelopment = process.env.Node_Env !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ?  'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [ ".js", ".jsx"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', "index.html")
        })
    ],

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {  test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],

            }
        ],
    }

 };

