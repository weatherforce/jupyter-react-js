module.exports = [
    {
      entry: './src/index.js',
      output: {
          filename: 'index.js',
          path: './',
          libraryTarget: 'amd'
      },
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
      },
      module : {
        rules : [
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options:{
					presets: ['@babel/preset-env']
				}
			}
          }
        ]
      }
    }
];
