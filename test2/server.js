const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8800;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const cities = [
    {
    "city": "Toronto",
    "latitude": "180",
    "longitude": "200",
    "State": "Ontario",
    "country": "Canada",
    "d": "cloudy",
    "temperature": "20 c",
    "humidity": "30%",
    "windSpeed": "50 km/h",
    "direction": "northeast",
},
{
    "city": "North York",
    "latitude": "170",
    "longitude": "210",
    "State": "Ontario",
    "country": "Canada",
    "weather": "Rainy",
    "temperature": "5 c",
    "humidity": "80%",
    "windSpeed": "20 km/h",
    "direction": "south",
},
];

//get weather
app.get('/api/weather/:city', function(req, res) {
    const city = cities.find(c =>c.city === req.params.city);
    if(!city)
        res.status(400).send("Requested city not found");

    res.status(200).send(city.weather);
});

//update weather
app.put('/api/weather/:city', function(req, res) {
    const city = cities.find(c => c.city === req.params.city);
    if (!city)
        res.status(400).send("Requested city not found");
    city.weather = req.body.weather;
    res.status(200).send(city);
});

//Add \City
app.post('/api/weather', function(req, res){
    const city = {
        city: req.body.city,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        state: req.body.state,
        country: req.body.country,
        weather: req.body.weather,
        humidity: req.body.humidity,
        windspeed: req.body.windSpeed,
        direction: req.body.direction
    }

    cities.push(city);
    res.send(cities);

});


app.listen(PORT, function(req,res) {
    console.log(`Listening on ${PORT}`);
});
