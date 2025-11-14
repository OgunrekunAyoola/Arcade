// src/App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/HomePage";
import AvailableRooms from "./pages/AvailableRooms";
import BookingForm from "./pages/BookingForm";
import Loader from "./context/Loader";
import { LoadingProvider, useLoading } from "./context/LoadingContext";

// Wrap Routes in a component to access location
const AppRoutes = () => {
  const { loading, setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    // show loader immediately
    setLoading(true);

    // hide loader after a short delay, or after a component is mounted
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location, setLoading]);

  return (
    <>
      {loading && <Loader />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/available-rooms" element={<AvailableRooms />} />
      </Routes>
    </>
  );
};

const App = () => (
  <LoadingProvider>
    <AppRoutes />
  </LoadingProvider>
);

export default App;
