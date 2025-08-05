import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <p className="flex items-start gap-2 mb-3">
            <MapPin className="w-5 h-5 mt-1 text-pink-500" />
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-pink-500" />
            <a href="tel:+919007062180" className="hover:text-pink-400 transition">
              +91 9007062180
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-pink-500" />
            <a href="mailto:info@kingsukhguesthouse.com" className="hover:text-pink-400 transition">
              info@kingsukhguesthouse.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {['home', 'about', 'services', 'rooms', 'gallery', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-pink-400 transition capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + CTA */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition"
            >
              <Instagram />
            </a>
          </div>
          <a
            href="https://wa.me/919007062180"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} King Sukh Guest House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
