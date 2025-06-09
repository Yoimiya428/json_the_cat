// breedFetcher.js
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(`Breed '${breedName}' not found.`, null);
    }

    const breed = data[0];
    callback(null, breed.description);
  });
};

module.exports = { fetchBreedDescription };
