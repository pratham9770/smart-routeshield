import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center flex flex-col md:flex-row items-center justify-left">
      <div className="w-full md:w-1/2 mb-12 md:mr-6">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">Safety </h1>
        <h1 className="text-8xl font-bold text-gray-800 mb-4"> Doesn't </h1>
        <h1 className="text-8xl font-bold text-gray-800 mb-4">Happen by </h1>
        <h1 className="text-8xl font-bold text-gray-800 mb-4"> Accident</h1>
        <p className="text-lg text-gray-600 mb-8">Stay informed and predict accident severity to ensure road safety.</p>
        <Link to="/fillform">
          <button className="btn btn-primary px-8 py-4 rounded-full border border-white text-lg font-semibold shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transition duration-300">
            Click to Predict Severity
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2">
        <img src="src\images\imageee.jpg" alt="Safety Poster" className="mx-auto rounded-lg shadow-lg" style={{ maxWidth: '600px', maxHeight: '50vh' }} />
      </div>
    </div>
  );
}

export default Home;
