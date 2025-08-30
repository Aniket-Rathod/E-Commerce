import React from "react";
import { Box, Button, TextField } from "@mui/material";
import AddressCard from "../AdressCard/AdressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("Address Submitted:", address);
  };

  return (
    <div className="w-full flex gap-4">
      {/* Left Side - Saved Address */}
      <div className="w-5/12 h-[32rem] border rounded-md shadow-md bg-white overflow-y-scroll">
        <div className="p-5 py-7 border-b cursor-pointer">
          <AddressCard />
          <Button
            sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
          >
            Deliver Here
          </Button>
        </div>
      </div>

      {/* Right Side - New Address Form */}
      <div className="w-7/12 h-[32rem] border rounded-md shadow-md p-6 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1: First & Last Name */}
          <div className="flex gap-4">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
            />
          </div>

          {/* Row 2: Address */}
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            multiline
            rows={3}
          />

          {/* Row 3: City & State */}
          <div className="flex gap-4">
            <TextField required id="city" name="city" label="City" fullWidth />
            <TextField
              required
              id="state"
              name="state"
              label="State / Province / Region"
              fullWidth
            />
          </div>

          {/* Row 4: Zip & Phone */}
          <div className="flex gap-4">
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal Code"
              fullWidth
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
            />
          </div>

          {/* Submit Button */}
          <Button
            sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
            type="submit"
          >
            Deliver Here
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
