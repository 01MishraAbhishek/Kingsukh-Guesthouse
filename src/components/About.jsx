// src/components/About.jsx

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <img
          src="/images/guesthouse.jpg"
          alt="Kingsukh Guest House"
          className="w-full h-auto rounded-xl shadow-lg"
          loading="lazy"
        />

        {/* Text */}
        <div>
          <p className="text-sm text-pink-600 uppercase tracking-widest mb-2 dark:text-pink-400">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4 dark:text-white">
            The Best Holidays Start Here!
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed dark:text-gray-300">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam.
          </p>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed dark:text-gray-300">
            Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature’s beauty and heartfelt hospitality.
          </p>
          <p className="text-gray-800 font-medium mb-2 dark:text-gray-200">
            <span className="font-bold">📍 Address: </span>
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal – 723156
          </p>
          <p className="text-gray-800 font-medium mb-6 dark:text-gray-200">
            <span className="font-bold">📞 Contact: </span>
            +91 9007062180
          </p>

          <a
            href="https://wa.me/919007062180?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%20Kingsukh%20Guest%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md shadow hover:bg-pink-700 transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;