import React, { useState, useEffect } from 'react';
import {Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

import illustration1 from '../assets/login-bg-01.png';
import illustration2 from '../assets/login-bg-02.png';
import illustration3 from '../assets/login-bg-03.png';

const images = [illustration1, illustration2, illustration3];

const LoginPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      {/* LEFT - Form side */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#ffffff', 
          px: { xs: 3, sm: 6, md: 8, lg: 10 },
          py: { xs: 4, md: 6 },
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '480px',
            mx: 'auto',
          }}
        >
          <LoginForm />
        </Box>
      </Box>

      {/* RIGHT - Image side */}
      <Box
        sx={{
          width: { xs: '0%', md: '60%' },
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#ffffff',
          height: '100%',
          overflow: 'hidden',
          p: { md: 2, lg: 3 },
          
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ebf5e0',
            borderRadius: { md: '20px  20px 20px 20px' },
            p: { md: 6, lg: 8 },
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          
          <Box
            sx={{
              width: '100%',
              height: '65%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              mb: 4,
            }}
          >
            <img
              src={images[currentImageIndex]}
              alt="Productivity illustration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Image Navigation Dots */}
          <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
            {images.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: idx === currentImageIndex ? 'black' : '#d0d0d0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </Box>

          <Typography
            sx={{
              fontSize: '16px',
              color: '#2D2D2D',
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              lineHeight: 1.6,
              px: 4,
              maxWidth: '85%',
            }}
          >
            Make your work easier and organized <br />
            with <Box component="span" sx={{ fontWeight: 700 }}>Tuga's App</Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;