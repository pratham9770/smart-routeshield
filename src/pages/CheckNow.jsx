import React, { useState, useEffect } from 'react';
import Result from '../components/Result.jsx'; // Use 'Result' instead of 'result'

function getRandomSeverity() {
  const severities = ['Fatal', 'Slight', 'Serious'];
  const randomIndex = Math.floor(Math.random() * severities.length);
  return severities[randomIndex];
}

function CheckNow() {
  const [formData, setFormData] = useState({
    Did_Police_Officer_Attend: '',
    lat: '',
    lon: '',
    age_of_driver: '',
    vehicle_type: '',
    age_of_vehicle: '',
    engine_cc: '',
    day: '',
    light: '',
    roadsc: '',
    gender: '',
    speedl: ''
  });
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false); // State to control showing result

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate fetching data from backend by generating a random result
      const severity = getRandomSeverity();
      setResult(severity);
      setShowResult(true); // Show result after setting it
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
    setLoading(false);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    setFormData({
      ...formData,
      lat: latitude.toString(),
      lon: longitude.toString()
    });
    // Fetch weather data based on coordinates
    fetchWeather(latitude, longitude);
  };

  const fetchWeather = async (lat, lon) => {
    const apiKey = '1e9ac4992fd1e2354a7c482084c4e7e1';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial weather data based on user's geolocation
    getLocation();
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Fetch weather data whenever location changes
    if (formData.lat && formData.lon) {
      fetchWeather(formData.lat, formData.lon);
    }
  }, [formData.lat, formData.lon]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600 rounded-lg text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
          <label htmlFor="Did_Police_Officer_Attend" className="block font-semibold text-gray-300 mb-2">Did Police Officer Attend Scene of Accident</label>
            <input type="text" className="form-control mb-4 bg-gray-700" name="Did_Police_Officer_Attend" value={formData.Did_Police_Officer_Attend} onChange={(e) => setFormData({ ...formData, Did_Police_Officer_Attend: e.target.value })} />
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="lat" className="block font-semibold text-gray-300 mb-2">Latitude</label>
                <input type="text" className="form-control bg-gray-700" name="lat" value={formData.lat} onChange={(e) => setFormData({ ...formData, lat: e.target.value })} />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="lon" className="block font-semibold text-gray-300 mb-2">Longitude</label>
                <input type="text" className="form-control bg-gray-700" name="lon" value={formData.lon} onChange={(e) => setFormData({ ...formData, lon: e.target.value })} />
              </div>
            </div>
            <div className="text-center mb-6">
              <button id="getIt" className="btn btn-primary px-6 py-2 rounded-md border border-white" onClick={getLocation}>Get Coordinates</button>
            </div>
            {weatherData && (
              <div className="mb-4 border border-white rounded-lg p-4">
                <h2 className="font-semibold text-lg mb-2">Weather Information</h2>
                <p>Temperature: {Math.round(weatherData.main.temp - 273)}°C</p>
                <p>Description: {weatherData.weather[0].description}</p>
              </div>
            )}
            {/* Additional Form Fields */}
            <div className="form-group">
              <label htmlFor="age_of_driver" className="block font-semibold text-gray-300 mb-2">Age of Driver</label>
              <input type="text" className="form-control bg-gray-700" name="age_of_driver" value={formData.age_of_driver} onChange={(e) => setFormData({ ...formData, age_of_driver: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle_type" className="block font-semibold text-gray-300 mb-2">Vehicle Type</label>
              <select className="form-control bg-gray-700" name="vehicle_type" value={formData.vehicle_type} onChange={(e) => setFormData({ ...formData, vehicle_type: e.target.value })}>
                <option value="">Select Vehicle Type</option>
                <option value="1">1 : Pedal cycle</option>
                <option value="2">2 : Motorcycle 50cc and under</option>
                <option value="3">3 : Motorcycle 125cc and unders</option>
                <option value="4">4 : Motorcycle over 125cc and up to 500cc</option>
                <option value="5">5 : Motorcycle over 500cc</option>
                <option value="8">8 : Taxi/Private hire car</option>
                <option value="9">9 : Car</option>
                <option value="10">10 : Minibus (8 - 16 passenger seats)</option>
                <option value="11">11 : Bus or coach (17 or more pass seats)</option>
                <option value="18">18 : Tram</option>
                <option value="20">20 : Truck(Goods)</option>
                <option value="23">23 : Electric motorcycle</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="age_of_vehicle" className="block font-semibold text-gray-300 mb-2">Age of Vehicle</label>
              <input type="text" className="form-control bg-gray-700" name="age_of_vehicle" value={formData.age_of_vehicle} onChange={(e) => setFormData({ ...formData, age_of_vehicle: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="engine_cc" className="block font-semibold text-gray-300 mb-2">Engine Capacity in CC</label>
              <input type="text" className="form-control bg-gray-700" name="engine_cc" value={formData.engine_cc} onChange={(e) => setFormData({ ...formData, engine_cc: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="day" className="block font-semibold text-gray-300 mb-2">Day of Week</label>
              <select className="form-control bg-gray-700" name="day" value={formData.day} onChange={(e) => setFormData({ ...formData, day: e.target.value })}>
                <option value="">Select Day of Week</option>
                <option value="1">1 : Sunday</option>
                <option value="2">2 : Monday</option>
                <option value="3">3 : Tuesday</option>
                <option value="4">4 : Wednesday</option>
                <option value="5">5 : Thursday</option>
                <option value="6">6 : Friday</option>
                <option value="7">7 : Saturday</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="light" className="block font-semibold text-gray-300 mb-2">Light Conditions</label>
              <select className="form-control bg-gray-700" name="light" value={formData.light} onChange={(e) => setFormData({ ...formData, light: e.target.value })}>
                <option value="">Select Light Conditions</option>
                <option value="1">1 : Daylight</option>
                <option value="4">4 : Darkness - lights lit</option>
                <option value="5">5 : Darkness - lights unlit</option>
                <option value="6">6 : Darkness - no lighting</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="roadsc" className="block font-semibold text-gray-300 mb-2">Road Surface Conditions</label>
              <select className="form-control bg-gray-700" name="roadsc" value={formData.roadsc} onChange={(e) => setFormData({ ...formData, roadsc: e.target.value })}>
                <option value="">Select Road Surface Conditions</option>
                <option value="1">1 : Dry</option>
                <option value="2">2 : Wet or damp</option>
                <option value="3">3 : Snow</option>
                <option value="4">4 : Frost or Ice</option>
                <option value="5">5 : Flood</option>
                <option value="7">7 : Mud</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="block font-semibold text-gray-300 mb-2">Gender</label>
              <select className="form-control bg-gray-700" name="gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                <option value="">Select Gender</option>
                <option value="1">1 : Male</option>
                <option value="2">2 : Female</option>
                <option value="3">3 : Unknown</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="speedl" className="block font-semibold text-gray-300 mb-2">Speed Limit</label>
              <input type="text" className="form-control bg-gray-700" name="speedl" value={formData.speedl} onChange={(e) => setFormData({ ...formData, speedl: e.target.value })} />
            </div>
            <div className="p-6 flex flex-col items-center">
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-1/2 lg:w-1/3 py-4 text-lg justify-center animate-pulse" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Predict'}
              </button>
              {showResult && result && <Result predictedSeverity={result} />} {/* Only show result when showResult is true and result is not null */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckNow;
