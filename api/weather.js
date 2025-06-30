const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.openweathermap.org/data/3.0/weather', {
      params: {
        lat: 37.75,
        lon: -122.5,
        units: 'metric',
        appid: '92e1aa040a1cacb34144d17cd1d650f4'
      }
    });

    res.json({
      location: 'Sunset District, San Francisco',
      temperature: data.main.temp,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
