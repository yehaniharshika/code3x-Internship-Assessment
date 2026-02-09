import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const TokenPage: React.FC = () => {
  const location = useLocation();
  const accessToken = location.state?.accessToken || 'No token available';

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h5">Login Successful!</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Your access token: {accessToken}
      </Typography>
    </Box>
  );
};

export default TokenPage;