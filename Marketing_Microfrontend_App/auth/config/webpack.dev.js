const {merge}=require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const commonConfig=require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8082/'
    },
    devServer:{
        port:8082,
        historyApiFallback:true
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remote.js',
            exposes:{
                './AuthApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies,

        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports=merge(commonConfig,devConfig)