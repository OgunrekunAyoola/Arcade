// Contact.jsx
import React, { useState } from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left info panel */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-satoshi font-bold text-gray-900">
            Stay with us in comfort
          </h2>
          <p className="text-2xl font-satoshi text-gray-700 mb-6">
            Have any questions?
          </p>

          <ContactCard type="phone" value="+2347077740985" />
          <ContactCard
            type="location"
            value="Opposite Federal High Court, Maitama, Abuja, Nigeria"
          />
          <ContactCard type="instagram" value="@arcade_suites" />
          <ContactCard type="email" value="reservations@arcadesuites.ng" />
        </div>

        {/* Right form panel */}
        <div className="flex-1">
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg font-satoshi">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded border border-gray-300 font-satoshi focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded border border-gray-300 font-satoshi focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded border border-gray-300 font-satoshi focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 font-satoshi"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
