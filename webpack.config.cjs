// Import path for resolving file paths
const path = require('path');
module.exports = {
    mode: 'development',
    target: 'web',
    devtool: false,
    entry: path.join(__dirname, "src/dynamoApp/add_data.js"),
    output: {
        path: path.resolve(__dirname, 'src/dynamoApp/'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}