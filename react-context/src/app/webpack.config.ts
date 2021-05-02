import { join } from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

export const mode = 'development'
export const entry = ['./src/index']
export const output = {
  path: `${__dirname}/dist`,
  filename: 'bundle.js',
}

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      },
    },
  ],
}

export const devServer = {
  contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 9000,
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

export const plugins = [
  new HtmlWebpackPlugin({
    template: require('html-webpack-template'),
    devServer: 'http://localhost:9000',
    inject: false,
    appMountId: 'root',
    scripts: [
      'bundle.js'
    ]
  })
]
