import React from "react";
import Navbar from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Rooms from "../components/room/Room";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Rooms Section */}
      <section id="rooms">
        <Rooms />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
