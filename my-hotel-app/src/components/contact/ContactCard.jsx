// ContactCard.jsx
import React from "react";
import { Phone, MapPin, Mail, Instagram } from "lucide-react";

const iconMap = {
  phone: Phone,
  location: MapPin,
  email: Mail,
  instagram: Instagram,
};

const ContactCard = ({ type, value }) => {
  const Icon = iconMap[type];

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition">
      <Icon className="w-6 h-6 text-orange-500" />
      <span className="font-satoshi text-gray-900 font-semibold">{value}</span>
    </div>
  );
};

export default ContactCard;
