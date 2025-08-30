import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step"), 10) || 0; // ensure number

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: '100%' }}>
        {/* Stepper Header */}
        <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Stepper Content */}
        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        ) : (
          <React.Fragment>
            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {/* (You could add "Next" here if needed) */}
            </Box>

            {/* Step Content */}
            <div className="mt-10">
              {step === 2 ? <DeliveryAddressForm /> : <OrderSummary />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
