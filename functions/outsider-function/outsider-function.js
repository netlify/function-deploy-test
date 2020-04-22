const outside = require("../outside.js")


console.log(outside.message)

exports.handler = function(event, context, callback) {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(outside.message)
        })
}
