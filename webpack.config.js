module.exports = {
    entry:'./src/app/index.js',
    output:{
        path: __dirname + '/src/public',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    externals:{
        // global app config object
        config: JSON.stringify({
            apiUrl: '/api'
        })
    }
};