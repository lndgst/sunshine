# Sunshine Weather API

Simple Express API deployed on Vercel that returns the current weather for the
Sunset District in San Francisco.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server locally:
   ```bash
   npm start
   ```

When deployed to Vercel, the `/weather` endpoint will return the current
conditions in JSON format. The root `index.html` page fetches this endpoint and
displays the JSON response in the browser.
