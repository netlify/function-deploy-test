const axios = require("axios")

export function handler(event, context, callback) {

  // Perform the API call.
  const get = () => {
    axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
    .then((response) =>
      {
        console.log(response.data)
        callback( null, {
          statusCode: 200,
          body: JSON.stringify(response.data)
        })
      }
    )
    .catch(err => pass(err))
  }
  if(event.httpMethod == 'GET'){
    get()
  };
};