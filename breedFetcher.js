const needle = require("needle");
const breed = process.argv[2];
const api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

needle.get(api, (error, response, body) => {
  if (error) {
    throw error;
  }

  if (body.length === 0) {
    console.log("404 not found.");
    return;
  }

  const breed1 = body[0];
  console.log(`Description: ${breed1.name}:`);
  console.log(breed1.description);
});