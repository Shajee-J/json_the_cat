const request = require("request")
const breedName = process.argv[2];

request((`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`), (error, response, body) => {

  if (error) {
    console.log("request failed")
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('the requested breed is not found.')
    return;
  }

  // console.log(data)
  console.log(data[0].description);


});


