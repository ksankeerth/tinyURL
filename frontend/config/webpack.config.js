const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function (env) {

  const isProduction = env && env.production;

  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(path.dirname(__dirname), 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js[x]?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-react"]
            }
          }
        },
        {
          test: /\.([m]?js[x]?)$/,
          include: /node_modules/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.ts[x]?$/,
          use: [
            {
              loader: 'ts-loader'
            },
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            }
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quiet: true,
                }
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(path.dirname(__dirname), 'src', 'index.html'),
        filename: 'index.html',
        title: 'TinyUrl',
        meta: {
          viewport: 'width=device-width, initial-scale=1'
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new ESLintWebpackPlugin({
        cwd: path.dirname(__dirname),
        files: [
          './src/**/*.ts',
          './src/**/*.tsx'
        ]
      }),
      new StyleLintPlugin({
        files: './src/**/*.scss',
      })
    ],
    devtool:  'source-map',
  };


  return config;
}


