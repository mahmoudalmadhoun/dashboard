const path = require('path')
const  HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {

    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'bundel.js'
    },

    module : {
        rules : [
            {
                test : /\.m?js/,
                exclude : /node_modules/,
                use : {
                    loader :'babel-loader',
                    options : {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,

                type: 'asset/resource',

            },
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
    devServer : {
        static : {
            directory : path.join(__dirname ,'build')
        },
        compress : true,
        port : 3000,
        historyApiFallback: true,
    }

}