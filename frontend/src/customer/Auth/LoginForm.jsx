import { TextField, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";

const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData))
    console.log("userData", userData);
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              size="small"
              autoComplete="email"
            />
          </Grid>
        </Grid>

        <Grid sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              size="small"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>

        <Grid sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 1,
                py: 1.2,
                fontSize: "1rem",
                backgroundColor: "#9351e4ff",
                boxShadow: 2,
              }}
            >
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you don't have account ?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            REGISTER
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
