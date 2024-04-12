const path = require("path");
const webpack = require("webpack");

module.exports =  {
    entry: "./src/index.js",
    mode : "development",
    module : {
        rules:[
            {   test: /\.(js|jsx)$/,
                exclude : /(node_modules)/,
                loader:'babel-loader',
                options : { presets :["@babel/preset-env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }]  
    },
    resolve : {  
        extensions :["*",".js",".jsx"] 
    },
    output : {
        path : path.resolve(__dirname, 'dist/'),
        publicPath : '/dist/',
        filename : 'bundle.js'
    },
    // devServer : {
    //     contentBase: path.join(__dirname, "public"),
    //     port :3000,
    //     publicPath : "http://localhost:3000/dist/",
    //     hot :"only"
    // },
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'public/'),
        },
        devMiddleware: {
            publicPath: '/dist/'
        },
        port: 3000,
        hot: "only"
    },

    plugins :[ new webpack.HotModuleReplacementPlugin()]   
  
}