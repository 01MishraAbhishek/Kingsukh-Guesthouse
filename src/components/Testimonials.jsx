// src/components/Testimonials.jsx

import { useState } from 'react';

function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      name: 'Ravi Sharma',
      text: 'Excellent stay! The rooms were clean, the food was tasty, and the staff was very polite. Highly recommended!',
    },
    {
      name: 'Priya Das',
      text: 'A peaceful place near nature. Loved the environment and the hospitality. Great for a weekend getaway!',
    },
    {
      name: 'Ankit Verma',
      text: 'Good value for money. The room service was fast and the management was very responsive.',
    },
  ]);

  const [formData, setFormData] = useState({ name: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.text.trim()) {
      setReviews([{ ...formData }, ...reviews]);
      setFormData({ name: '', text: '' });
    }
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-pink-600 dark:text-white">What Our Guests Say</h2>

        {/* Review Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-10 max-w-xl mx-auto space-y-4 text-left bg-gray-50 dark:bg-gray-800 p-6 rounded shadow"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Review"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            rows="4"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
          >
            Submit Review
          </button>
        </form>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-pink-100 dark:border-pink-500/20 p-6 rounded shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">“{review.text}”</p>
              <h4 className="text-pink-600 font-semibold text-lg">– {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
