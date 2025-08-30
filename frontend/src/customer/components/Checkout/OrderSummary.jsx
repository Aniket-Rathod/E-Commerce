import React from "react";
import { Button } from "@mui/material";
import AddressCard from "../AdressCard/AdressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      {/* Address Section */}
      <div className="p-5 shadow-lg rounded-md border bg-white">
        <AddressCard />
      </div>

      {/* Cart & Price Details */}
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border rounded-md shadow-md bg-white">
            {/* Title */}
            <p className="uppercase font-bold opacity-60 py-3 px-4 border-b">
              Price Details
            </p>

            {/* Price Breakdown */}
            <div className="space-y-3 font-semibold px-4 py-3">
              <div className="flex justify-between">
                <span>Price</span>
                <span>$4697</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-3419</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between font-bold border-t pt-3">
                <span>Total Amount</span>
                <span className="text-green-600">$1278</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="px-4 py-4">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  px: "2.3rem",
                  py: ".7rem",
                  bgcolor: "#9155fd",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
