const {merge}=require('webpack-merge')
const commonConfig=require('./webpack.common');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON=require('../package.json')
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8080/'
    },
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        },
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remote.js',
                auth:'auth@http://localhost:8082/remote.js'
            },
            shared:packageJSON.dependencies,
        }),
       
    ]
};

module.exports=merge(commonConfig,devConfig)