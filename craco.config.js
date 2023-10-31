const path = require('path')
const resolve = (url) => path.resolve(__dirname, url)

module.exports = {
  webpack: {
    configure: {
      entry: './src/index.tsx'
    },
    alias: {
      '@/': resolve('src'),
      '@/assets': resolve('src/assets'),
      '@/store': resolve('src/store'),
      '@/components': resolve('src/components'),
      '@/service': resolve('src/service'),
      '@/router': resolve('src/router'),
      '@/hooks': resolve('src/hooks'),
      '@/views': resolve('src/views'),
      '@/utils': resolve('src/utils'),
      '@/query': resolve('src/query'),
      '@/data': resolve('src/data'),
      '@/schema': resolve('src/schema'),
      '@/keys': resolve('src/keys')
    },
    module: {
      // rules: [
      //   {
      //     test: /\.s[ac]ss$/i,
      //     use: [
      //       // Creates `style` nodes from JS strings
      //       'style-loader',
      //       // Translates CSS into CommonJS
      //       'css-loader',
      //       // Compiles Sass to CSS
      //       'sass-loader'
      //     ]
      //   }
      // ]
    }
  }
}
