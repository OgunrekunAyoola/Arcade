// src/context/LoadingContext.jsx
import { createContext, useState, useContext } from "react";

export const LoadingContext = createContext(); // ✅ export here

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
