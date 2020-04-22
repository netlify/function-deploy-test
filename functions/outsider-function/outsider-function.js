const fs = require('fs')

const path = './outside.js'
let outside = require(path)
if (!fs.existsSync(path)) {
  outside = require("."+path)
}

console.log(outside.message)

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(outside.message),
  })
}
