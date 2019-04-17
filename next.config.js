// next.config.js
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

const imgAndCssObj = withImages(withCSS())

module.exports = {
  ...imgAndCssObj
}