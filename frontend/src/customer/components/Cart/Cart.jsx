import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1,1].map((item=><CartItem />))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border border-gray-300 rounded-lg shadow-md p-5 bg-white">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span className="text-grey-500">Price</span>
                <span>₹3999</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-orange-500">-₹999</span>
              </div>
              <div className="flex justify-between pt-3 text-black ">
                <span>Delivery Charge</span>
                <span className="text-yellow-500">₹49</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Total Amount</span>
                <span className="text-green-500">₹2999</span>
              </div>
            </div>
            <Button
              variant="contained" className="w-full"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Check out
            </Button>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Cart;
