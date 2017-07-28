'use strict'
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const query = loaderUtils.parseQuery(this.query)
  let str = source
  Object.keys(query).forEach(key => {
    if (!query[key]) return
    const reg = new RegExp(key, 'g')
    str = str.replace(reg, query[key])
  })
  return str
}
