// src/components/Services.jsx

import React from "react";
import {
  Wifi,
  BellRing,
  Car,
  Utensils,
  ParkingCircle,
  BedDouble,
} from "lucide-react";
import serviceImg from "../assets/service.jpg";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Wifi size={32} />,
    title: "Free Wi-Fi",
    description: "Stay connected throughout the premises.",
  },
  {
    icon: <BellRing size={32} />,
    title: "24/7 Room Service",
    description: "We’re always ready to assist you.",
  },
  {
    icon: <Car size={32} />,
    title: "Local Car Rentals",
    description: "Explore the surroundings at your pace.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Delicious Food",
    description: "Veg & Non-Veg available with local flavor.",
  },
  {
    icon: <ParkingCircle size={32} />,
    title: "Free Parking",
    description: "Spacious & secure parking area.",
  },
  {
    icon: <BedDouble size={32} />,
    title: "Comfortable Rooms",
    description: "Clean and cozy accommodations for all.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Services = () => {
  return (
    <section className="py-20 px-6 lg:px-24 bg-white dark:bg-gray-900" id="services">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Services Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-pink-600 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10">
            Experience comfort, convenience and care with our best-in-class premium services.
          </p>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                variants={fadeIn}
              >
                <div className="text-pink-600 mb-3">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={serviceImg}
            alt="Services"
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
