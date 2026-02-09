import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const TokenPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        setToken(idToken);
      } else {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', bgcolor: '#f5f5f5', p: 4 }}>
      <Box sx={{ maxWidth: 600, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 ,fontFamily: "Poppins, sans-serif",fontWeight: 700}}>Your Access Token</Typography>
        {token ? (
          <Typography variant="body1" sx={{ wordBreak: 'break-all', bgcolor: '#fff', p: 3, borderRadius: 2, boxShadow: 1 ,fontFamily: "Poppins, sans-serif"}}>{token}</Typography>
        ) : (
          <Typography variant="body1" sx={{fontFamily: "Poppins, sans-serif"}}>Loading token...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default TokenPage;