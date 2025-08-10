// src/components/Rooms.jsx

import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function Rooms() {
  const images = [
    '/images/room1.jpg',
    '/images/room2.jpg',
    '/images/room3.jpg',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const roomData = [
    {
      title: 'Deluxe Room',
      features: 'AC, TV, Double Bed, Private Bathroom',
      price: '₹1,200/night',
      image: images[0],
    },
    {
      title: 'Family Suite',
      features: 'AC, 2 Beds, Balcony, Breakfast Included',
      price: '₹1,800/night',
      image: images[1],
    },
    {
      title: 'Budget Room',
      features: 'Fan, Single Bed, Clean Bathroom',
      price: '₹800/night',
      image: images[2],
    },
  ];

  return (
    <section id="rooms" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Our Rooms
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Choose from our best rooms at affordable prices.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {roomData.map((room, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition p-4"
            >
              <img
                src={room.image}
                alt={room.title}
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
                className="w-full h-48 object-cover rounded mb-3 cursor-pointer hover:scale-105 transition duration-300"
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {room.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {room.features}
              </p>
              <p className="text-lg font-semibold text-pink-600 mb-3">
                {room.price}
              </p>
              <a
                href={`https://wa.me/919007062180?text=Hi, I want to book the ${room.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition"
                aria-label={`Book ${room.title} on WhatsApp`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
}

export default Rooms;
