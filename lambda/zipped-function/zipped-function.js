const axios = require("axios")
const path = require("path")
const fs = require("fs")

const fileName = "./some-other.js"
let resolved
if (process.env.LAMBDA_TASK_ROOT) {
  resolved = path.resolve(process.env.LAMBDA_TASK_ROOT, fileName)
} else {
  resolved = path.resolve(__dirname, fileName)
}

const file = fs.readFileSync(path.resolve(resolved));
console.log(file)

exports.handler = function(event, context, callback) {
  // Perform the API call.
  const get = () => {
    axios
      .get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
      .then((response) => {
        console.log(response.data)
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(response.data)
        })
      })
      .catch((err) => pass(err))
  }
  if (event.httpMethod == "GET") {
    get()
  }
}
