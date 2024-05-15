const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');


const ClientConfig = {
    entry : './src/index.js',
    output : {
        path: path.resolve(__dirname , 'build'),
        filename : './client/bundle.js'
    },

    module : {
        rules : [
            {

              test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
                loader: "file-loader",
                options : {
                    name: "/image/[name].[contenthash].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }

            },
            {
              test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
          
        ]
    },

    plugins :[
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
 


    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },

      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
 

}

const BackendConfig = {
    entry : './src/server/index.js',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ig
    output : {
        path: path.resolve(__dirname , 'build'),
        filename : 'server.js'
    },

    module : {
        rules : [
            {

                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
                loader: "file-loader",
                options : {
                  name: "/image/[name].[contenthash].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    
                }

            },
            {
              test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
           
        ]
    },

    plugins :[
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
 

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
}


module.exports = [ClientConfig,BackendConfig]