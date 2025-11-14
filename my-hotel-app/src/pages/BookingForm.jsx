import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    room: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData); // for debugging
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Booking Successful!
        </h1>
        <p className="text-lg text-gray-700">
          Thank you {formData.name}, your booking request has been received.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Complete Your Booking
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="room"
          placeholder="Room Name"
          value={formData.room}
          onChange={handleChange}
          required
          className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <input
          type="number"
          name="guests"
          min={1}
          max={5}
          value={formData.guests}
          onChange={handleChange}
          required
          className="p-4 border rounded-xl w-full focus:ring-2 focus:ring-orange-500"
          placeholder="Number of Guests"
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl rounded-2xl p-4 mt-2 shadow-lg transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
