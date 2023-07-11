const request = require("request")




const fetchBreedDescription = function (breedName, callback) {
  request((`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`), (error, response, body) => {
    let data = null;
    try {
      data = JSON.parse(body);
    }
    catch {
      if (error) {
        callback("request failed")
        return;
      }
    }
    if (data.length === 0) {
      callback('the requested breed is not found.')
      return;
    }
    if (data && data[0]) {
      // console.log(data)
      callback(error, data[0].description);
    }
  })
};


module.exports = { fetchBreedDescription }

