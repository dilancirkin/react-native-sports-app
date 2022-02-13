export default async function getCurrentWeather(coords) {
  const axios = require('axios');

  const lat = coords.latitude;

  const log = coords.longitude;

  var results = [];

  await axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=40a5f7559101e8312445dfae9a9b0db1`,
    )
    .then(function (response) {
      const data = response.data;
      const currentTemperature = data.main.temp;

      results = [currentTemperature];
    })
    .catch(function (error) {
      console.log(error);
    });

  return results;
}
