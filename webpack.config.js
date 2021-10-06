const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    /**
    ¿Por qué contenthash/fullhash?
    el navegador tiende a almacenar en caché los paquetes en caso de que, si proporciona un paquete nuevo, use archivos antiguos en caché debido al mismo nombre y eso puede causar un error, para guardar se agrega un hash, el cual cambia si actualizamos nuestro código base para que nuestro usuario final tenga la ultima version del paquete sin preocuparse por nada.
     */
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: isDevelopment
      ? 'static/js/[name].js'
      : 'static/js/[name].[contenthash:8].js',
    chunkFilename: isDevelopment
      ? 'static/js/[name].js'
      : 'static/js/[name].[contenthash:8].js',
  },
  devServer: {
    open: true,
    client: {
      overlay: true,
    },
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
