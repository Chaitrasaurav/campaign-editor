const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
       loaders: [
         { test: /\.jsx?$/, loader: 'babel-loader', include: [path.resolve(__dirname, "src"), 'node_modules/material-ui'], query: { presets: ['es2015', 'react'] }},
         { test: /\.jsx?$/, loaders: 'eslint-loader', include: path.resolve(__dirname, "src") },
         { test: /\.html$/, loader: 'html', query: { minimize: true }, include: __dirname },
         { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=/dist/assets/img/[name].[ext]', include: path.resolve(__dirname, "src") },
       ],
   },
   resolve: {
     extensions: [".jsx", ".json", ".js"]
   },
};
