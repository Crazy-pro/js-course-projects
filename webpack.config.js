const path = require('path')
const { CleanPlugin } = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './section-21-project-01-tools/src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
    // devServer: {
    //     contentBase: './'
    // }
}
