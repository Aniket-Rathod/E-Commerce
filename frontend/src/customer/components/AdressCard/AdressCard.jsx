import React from "react";

const AdressCard = () => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <div className="space-y-2">
        {/* Name */}
        <p className="font-semibold text-lg">Ram Singh</p>

        {/* Address */}
        <p className="text-gray-700">Mumbai, Borivali, 40001</p>

        {/* Phone */}
        <div className="space-y-1">
          <p className="font-semibold text-sm">Phone Number</p>
          <p className="text-gray-700">987653241</p>
        </div>
      </div>
    </div>
  );
};

export default AdressCard;
