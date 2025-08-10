import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

const galleryItems = [
  { title: "Baranti Hill", img: "/baranti.jpg", category: "Nature", date: "2024-07-01" },
  { title: "Ayodhya Hills", img: "/ayodhya.jpg", category: "Nature", date: "2024-07-10" },
  { title: "Autumn View", img: "/flower.jpg", category: "Nature", date: "2024-07-14" },
  { title: "Mithon Dam", img: "/mithonDam.jpg", category: "Water", date: "2024-06-22" },
  { title: "Palash Bloom", img: "/palash.jpg", category: "Flowers", date: "2024-07-20" },
  { title: "Entrance View", img: "/out.jpg", category: "Property", date: "2024-07-18" },
  { title: "Sunset Point", img: "/sunset.jpg", category: "Nature", date: "2024-07-22" },
];

const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortOrder, setSortOrder] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleFilter = (items) =>
    selectedCategory === "All"
      ? items
      : items.filter(item => item.category === selectedCategory);

  const handleSort = (items) =>
    items.sort((a, b) =>
      sortOrder === "latest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  const filteredSortedItems = handleSort(handleFilter([...galleryItems]));
  const visibleItems = filteredSortedItems.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-600 dark:text-white">Gallery</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Discover scenic views around our guest house
        </p>
      </div>

      {/* Filter Tabs + Sorting */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 mb-6">
        {/* Filter Tabs */}
        <div className="flex overflow-auto gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6); // reset pagination
              }}
              className={`px-4 py-1 rounded-full whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-pink-600 text-white"
                  : "border border-pink-600 text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="ml-auto border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded"
        >
          <option value="latest">Latest ⬇️</option>
          <option value="oldest">Oldest ⬆️</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.img}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl cursor-pointer rounded overflow-hidden"
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(galleryItems.indexOf(item));
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {visibleCount < filteredSortedItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={galleryItems.map((item) => ({ src: item.img }))}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
          plugins={[Zoom, Fullscreen]}
        />
      )}
    </section>
  );
};

export default Gallery;
