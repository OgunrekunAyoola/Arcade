import React from "react";
import GalleryItem from "./GalleryItem";
import { galleryData } from "../../data/GalleryData";

const Gallery = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 bg-orange-200 clip-path-polygon">
      {/* Background overlay contour (optional subtle gradient) */}
      <div className="absolute inset-0 bg-orange-500 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-16 text-white">
        <h2 className="text-4xl sm:text-5xl font-satoshi font-bold mb-4">
          Create unforgettable memories during your stay
        </h2>
        <p className="text-2xl sm:text-3xl">Our Amenities</p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleryData.map((item) => (
          <GalleryItem
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
