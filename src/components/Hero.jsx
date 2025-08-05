import { motion } from 'framer-motion';

function Hero() {
  const heading = "Make Yourself At Home".split(" ");
  const subHeading = "Simple – Unique – Friendly";

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">

      {/* Optional Video Background */}
      {/* 
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/videos/baranti.mp4" type="video/mp4" />
      </video>
      */}

      {/* Background Image */}
      <div
        className="absolute w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center text-white z-10">
        
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg mb-4"
        >
          {subHeading}
        </motion.p>

        {/* Staggered Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          {heading.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white text-lg transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Book Now
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
