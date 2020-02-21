const axios = require("axios")
const path = require("path")
const fs = require("fs")

const file = fs.readFileSync(path.resolve(process.env.LAMBDA_TASK_ROOT, "../some-other.js"));
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
