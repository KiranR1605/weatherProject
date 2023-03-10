const express = require("express")
const https = require("https")

const app = express()

app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b9e93df2981e85ddbe1b3f312c9c2ca0&units=metric"

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      var weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      res.send("<h1>the temp in the london is " +temp + " degree celcius</h1>")
    })
  })
})

app.listen(3000, function() {
  console.log("server is running in port 3000");
})
