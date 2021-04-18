import { join } from 'path'

export const mode = 'development'
export const entry = ['./src/index']
export const output = {
  path: `${__dirname}/public`,
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
  contentBase: join(__dirname, 'public'),
    compress: true,
    port: 9000,
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}
