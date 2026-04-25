# Weather Forecast App

A modern, responsive weather forecasting application built with React and Vite, inspired by the design and functionality of Apple Weather. Powered by the OpenWeatherMap API, the app delivers real-time weather data, multi-day forecasts, and an interactive weather map with switchable overlays.

## Features

- **Current Weather** — Real-time temperature, conditions, "feels like," and high/low for any city
- **Hourly Forecast** — Scrollable 24-hour outlook in 3-hour intervals
- **5-Day Forecast** — Daily high/low temperatures with weather icons
- **Interactive Weather Map** — Powered by Leaflet with switchable OpenWeatherMap layers (Precipitation, Temperature, Wind, Clouds)
- **Detailed Metrics** — Humidity, wind speed and direction, pressure, visibility, and cloud cover
- **Geolocation Support** — Auto-detect user's location on first load, plus a manual "current location" button
- **Unit Toggle** — Switch between Celsius and Fahrenheit instantly across all temperature displays
- **Dynamic Backgrounds** — Backgrounds shift based on current weather and time of day, with smooth crossfade animations
- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports
- **Robust Error Handling** — Graceful handling of invalid input, network failures, and unknown cities

## Tech Stack

- **React 18** — Component-based UI library
- **Vite** — Fast development server and build tool
- **Leaflet & React Leaflet** — Interactive map rendering
- **date-fns** — Date and time formatting
- **react-icons** — Weather and UI icons
- **CSS** — Custom styling with CSS variables, gradients, and keyframe animations
- **OpenWeatherMap API** — Weather data provider

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- An OpenWeatherMap API key ([sign up free](https://openweathermap.org/api))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jahvou/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your API key:**
   - Copy `.env.example` to a new file called `.env`
   - Add your OpenWeatherMap API key:
     ```
     VITE_WEATHER_API_KEY=your_actual_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

## Project Structure

The project follows a feature-based, modular architecture for scalability and maintainability:

```
weather-app/
├── public/
├── src/
│   ├── api/                    # API layer for OpenWeatherMap requests
│   │   ├── weatherApi.js
│   │   └── geocodingApi.js
│   ├── components/             # Feature-based components
│   │   ├── CurrentWeather/
│   │   ├── DailyForecast/
│   │   ├── ErrorMessage/
│   │   ├── HourlyForecast/
│   │   ├── Search/
│   │   ├── Skeleton/
│   │   ├── UnitToggle/
│   │   ├── WeatherDetails/
│   │   └── WeatherMap/
│   ├── context/                # Global state via React Context
│   │   ├── WeatherContext.jsx
│   │   └── useWeather.js
│   ├── hooks/                  # Custom React hooks
│   │   └── useGeolocation.js
│   ├── styles/                 # Global styles and animations
│   │   ├── global.css
│   │   └── animations.css
│   ├── utils/                  # Helper functions and constants
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   └── weatherHelpers.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### Architecture Notes

- **Separation of concerns:** API logic, UI components, state management, and utilities are isolated in their own folders.
- **Context-based state:** A central `WeatherContext` provides weather data, forecast data, units, location, loading, and error states to all components without prop drilling.
- **Component-scoped CSS:** Each component has its own CSS file to keep styles modular and easy to maintain.
- **Reusable utilities:** Functions like `convertTemp`, `formatHour`, and `groupForecastByDay` are isolated for reuse and testability.


## Planned Updates

- Map legend showing color-to-value scale for each weather layer
- Air quality index (AQI) integration
- Hourly precipitation chart
- Saved/favorite cities
- Sunrise/sunset visualization

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Map tiles by [OpenStreetMap](https://www.openstreetmap.org/) contributors
- Design inspiration from Apple Weather
