import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import mockup1 from '../assets/mockup1.png';
import mockup2 from '../assets/mockup2.png';

const ShowcaseSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          What dAlert Looks Like
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          A glimpse into your real-time liquidation alerting dashboard
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ flexWrap: 'nowrap' }}>
          {[mockup1, mockup2].map((src, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <img
                  src={src}
                  alt={`App preview ${index + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowcaseSection;