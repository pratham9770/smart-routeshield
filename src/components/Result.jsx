// In Result.jsx
import React from 'react';

function Result({ predictedSeverity }) {
  const renderAdditionalInfo = (severity) => {
    switch (severity) {
      case 'Fatal':
        return (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-700">Precautionary Actions:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Drive cautiously and adhere to traffic laws.</li>
              <li>Avoid distractions while driving.</li>
              <li>Always wear seat belts and ensure passengers do the same.</li>
              <li>Regularly maintain the vehicle for optimal safety.</li>
            </ul>
          </div>
        );
      case 'Serious':
        return (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-700">Precautionary Actions:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Stay focused on the road and avoid aggressive driving.</li>
              <li>Maintain a safe following distance from other vehicles.</li>
              <li>Be prepared for unexpected situations and hazards.</li>
              <li>Avoid driving under the influence of alcohol or drugs.</li>
            </ul>
          </div>
        );
      case 'Slight':
        return (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-700">Precautionary Actions:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Follow traffic signs and signals carefully.</li>
              <li>Stay alert and anticipate potential dangers on the road.</li>
              <li>Keep a safe speed appropriate for road conditions.</li>
              <li>Use turn signals and mirrors effectively while changing lanes or turning.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg mt-8 text-gray-700">
      <h2 className="text-2xl font-bold mb-4">Predicted Accident Severity</h2>
      <p className="text-lg font-semibold">Predicted Severity: {predictedSeverity}</p>
      {renderAdditionalInfo(predictedSeverity)}
    </div>
  );
}

export default Result;
