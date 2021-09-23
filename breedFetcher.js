const request = require('request');
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {

  request(url + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode >= 400) {
      callback(`StatusCode: ${JSON.parse(body).message}`, null);
    } else {
      const data = JSON.parse(body);
      if (data.length < 1) {
        callback("Breed not found", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };