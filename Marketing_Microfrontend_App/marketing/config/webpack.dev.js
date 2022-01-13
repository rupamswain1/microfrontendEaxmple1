const {merge}=require('webpack-merge')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const commonConfig=require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON=require('../package.json');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8081/'
    },
    devServer:{
        port:8081,
        historyApiFallback:true
        // {
        //     index:'index.html'
        // },
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'marketing',
            filename:'remote.js',
            exposes:{
                './MarketingApp': './src/bootstrap'
            },
            shared:packageJSON.dependencies,
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports=merge(commonConfig,devConfig)
