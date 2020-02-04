const path = require('path');

module.exports = [
    {
      entry: path.resolve(__dirname ,'src/index.js'),
      output: {
          filename: 'index.js',
          path: path.resolve(__dirname , '.'),
      },/*
      externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
      },*/
      module : {
        rules : [
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
			}
			}
        ]
      }
    }
];
