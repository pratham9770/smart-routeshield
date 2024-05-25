import React, { useState } from 'react';

export default function Statistics() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "src\\images\\img1.png",
    "src\\images\\img2.png",
    "src\\images\\img3.png",
    "src\\images\\img4.png",
    "src\\images\\img5.png",
    "src\\images\\img6.png",
    "src\\images\\img7.png",
    "src\\images\\img8.png"
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div >
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className='flex justify-between'>
        <button type="button" className="btn btn-success bg-gray-700 mt-8 border border-white w-full md:w-1/2 lg:w-1/3 py-4 text-lg justify-center rounded-half animate-pulse" onClick={previousImage}>Previous</button>
        <button type="button" className="btn btn-success bg-gray-700 mt-8 border border-white w-full md:w-1/2 lg:w-1/3 py-4 text-lg justify-center rounded-half animate-pulse" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}
