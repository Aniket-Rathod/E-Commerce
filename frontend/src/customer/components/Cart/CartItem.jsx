import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, Button } from "@mui/material";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full border-gray-300 object-cover object-top"
            src="https://m.media-amazon.com/images/I/61OXWnxR8lL._SY879_.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Lymio Men's Regular Fit Mid Rise Track Pant || Plain Track Pant
            (TP-57-58)
          </p>
          <p className="opacity-70">Size: L,Black</p>
          <p className="opacity-70 mt-2">
            Seller: J B Fashion, J B Fashion_Surat_395004
          </p>

          <div className="flex space-x-5 items-center text-grey-900 pt-6">
            <p className="font-semibold">₹299</p>
            <p className="opacity-50 line-through">₹499</p>
            <p className="text-green-600 font-semibold">15% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-4">
          {/* Decrease button */}
          <IconButton sx={{ color: "rgb(145 85 253)" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>

          {/* Quantity box */}
          <span className="px-4 py-1 border rounded-sm text-center">3</span>

          {/* Increase button */}
          <IconButton sx={{ color: "rgb(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>

          {/* Remove button */}
          <Button variant="outlined" color="error" sx={{ px: 3, py: 1 }}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
