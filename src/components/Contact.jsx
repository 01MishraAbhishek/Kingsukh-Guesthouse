function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info & Map */}
          <div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              <strong>Address:</strong><br />
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal – 723156
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              <strong>Phone:</strong> +91 9007062180
            </p>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.094275245315!2d86.87951657484494!3d23.179233410177447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39856f3b35755135%3A0xe27b0ae6572167fa!2sKing%20Sukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1710769167934!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded shadow-md border-2 border-gray-200 dark:border-gray-800"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
