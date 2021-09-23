const request = require('request');
const args = process.argv.slice(2);

request("https://api.thecatapi.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  if (error) {
    console.log("This URL domain does not seem to exist");
  } else if (response.statusCode === 404) {
    console.log("No such URL endpoint exists");
  } else {
    const data = JSON.parse(body);
    if (data.length < 1) {
      console.log('Breed not found');
    } else {
      console.log(data[0].description);
    }
  }
});