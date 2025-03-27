import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoopIcon from '@mui/icons-material/Loop';
import SmsIcon from '@mui/icons-material/Sms';

const features = [
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Real-time Liquidation Alerts',
    description: 'Stay ahead of the market with instant warnings before your position gets liquidated.',
  },
  {
    icon: <LoopIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Auto-Deleveraging Detection',
    description: 'Get notified when your position is at risk of being auto-deleveraged due to market volatility.',
  },
  {
    icon: <SmsIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: 'Multi-Channel Notifications',
    description: 'Receive alerts through Telegram, SMS, or PagerDuty — wherever you are.',
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: { xs: 8, sm: 10 }, pt: { xs: 12, sm: 10 } }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Why Choose dAlert?
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          Powerful features designed for dYdX traders
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  color: 'white',
                  borderRadius: 4,
                  width: '100%',
                  height: '100%',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', flexGrow: 1 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;