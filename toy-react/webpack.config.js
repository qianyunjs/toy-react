module.exports = {
    entry: {
        main:'./main.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:[['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]]
                    }
                }
            }
        ]

    },//打包规则
    mode:"development",//让打包后的main.js易读
    optimization:{
        minimize:false
    }
}