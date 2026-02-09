import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

// Import multiple images for rotation
import illustration1 from "../assets/login-bg-02.png";
import illustration2 from "../assets/login-bg-01.png";
import illustration3 from "../assets/login-bg-03.png";

const images = [
  illustration1,
  illustration2,
  illustration3, 
];

const LoginPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      {/* Left side - Login Form with white background */}
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#ffffff",
          p: { xs: 3, md: 6 },
          height: "100vh",
          width: "40%",
        }}
      >
        <LoginForm />
      </Grid>

      {/* Right side - Illustration with green background */}
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#ffffff", // Changed from red to green
          flexDirection: "column",
          height: "100vh",
          width: "60%",
          p: 4, // Padding around the content
        }}
      >
        <Box
          sx={{
            width: "98%", // Increased from 60% to make it bigger
            maxWidth: "1000px",
            textAlign: "center",
            backgroundColor: "#ebf5e0 ", // White background for image container
            borderRadius: "24px",
            p: 3,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "5px", // Remove right margin
          }}
        >
          {/* Image with fade animation */}
          <Box
            sx={{
              width: "100%",
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              position: "relative",
            }}
          >
            <img
              src={images[currentImageIndex]}
              alt="Productivity illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                animation: "fadeIn 1s ease-in-out",
              }}
            />
          </Box>

          {/* Dots indicator for image carousel */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              mb: 3,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: index === currentImageIndex ? "black" : "#d0d0d0",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </Box>

          {/* Text below illustration */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: "#2D2D2D",
              fontSize: "16px",
              lineHeight: 1.6,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Make your work easier and organized <br /> with{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Tuga's App
            </Box>
          </Typography>
        </Box>

        {/* CSS Animation for fade effect */}
        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
      </Grid>
    </Grid>
  );
};

export default LoginPage;