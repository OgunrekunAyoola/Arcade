# Arcade Suites Website

A fully responsive hotel booking website for **Arcade Suites**, built with React, React Router, and Tailwind CSS. The project features a dynamic homepage, a room availability checker, a room booking flow, and more.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project Locally](#running-the-project-locally)
- [Project Structure](#project-structure)
- [Checking Functionalities](#checking-functionalities)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

> You can provide a deployed demo link here if available (Render, Netlify, Vercel, etc.)

---

## Features

- **Responsive Hero Section** with overlay text and call-to-action button
- **Dynamic Check Availability Form**
  - Select room type
  - Select check-in/check-out dates
  - Select number of guests
  - Dynamically renders available rooms based on selection
- **Available Rooms Page**
  - Shows rooms matching selected criteria
  - Includes room images, description, price, amenities, and a "Book Now" button
- **Booking Form**
  - Dummy form capturing user info
  - Shows a success message upon submission
- **Global Loader**
  - Displays a loading spinner between route transitions
- **Navigation**
  - Smooth navigation between sections on homepage
  - Responsive navbar

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion
- **Routing:** React Router v6
- **State Management:** React Hooks
- **Animations:** Framer Motion
- **Data:** Local JS files (`dummyRooms.js`, `rooms.js`)

---

## Installation

1. Clone the repository:

git clone https://github.com/OgunrekunAyoola/Arcade.git
cd arcade-suites

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open your browser and go to:

http://localhost:3000

**Checking Functionalities**

Homepage

Verify hero section displays correctly on all screen sizes.

Check the "Book Your Stay" button scrolls/navigates to the check availability form.

Check Availability Form

Select a room type, check-in, check-out, and guests.

Validation ensures check-out cannot be earlier than check-in.

Click Search to navigate to the Available Rooms page.

Available Rooms Page

Rooms display based on the selected room type.

Each room shows number, price, guests, size, bed type, view, and image.

Clicking Book Now navigates to the Booking Form.

Booking Form

Fill dummy user info and submit.

Shows success message (dummy).

Global Loader

Appears briefly during route transitions.

Navigation & Responsiveness

Navbar links scroll to homepage sections (Rooms, Gallery, Contact, etc.).

Test on multiple screen sizes for responsiveness.
