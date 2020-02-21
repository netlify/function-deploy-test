const axios = require("axios")
const path = require("path")
const fs = require("fs")

// path of the included file will be `process.env.LAMBDA_TASK_ROOT/{name_of_function}/{included_filename}`
const fileName = "./zipped-function/some-other.js"
const resolved = (process.env.LAMBDA_TASK_ROOT)? path.resolve(process.env.LAMBDA_TASK_ROOT, fileName):path.resolve(__dirname, fileName)

fs.readFile(resolved, "utf8", (err, results) => console.log(results))

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
