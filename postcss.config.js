module.exports = {
  plugins: [
    require('postcss-preset-env')({
      features:{
        'autoprefixer': true,
        'nesting-rules': true,
      },
    }),
    require('postcss-import')
  ]
}