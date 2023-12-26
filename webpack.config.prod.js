const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './section-21-project-01-tools/src/app.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
    // devServer: {
    //     contentBase: './'
    // }
}
