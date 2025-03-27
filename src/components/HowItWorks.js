import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShieldIcon from '@mui/icons-material/Shield';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <PersonIcon sx={{ fontSize: 30, color: 'rgb(255, 255, 255)' }} />,
    title: 'Enter Subaccount',
    description: 'Submit your dYdX subaccount address securely.',
  },
  {
    icon: <NotificationsIcon sx={{ fontSize: 30, color: 'rgb(255, 255, 255)' }} />,
    title: 'Choose Alert Method',
    description: 'Select Telegram, SMS, or PagerDuty for notifications.',
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 30, color: 'rgb(255, 255, 255)' }} />,
    title: 'Stay Protected',
    description: 'Receive real-time alerts when your position is at risk.',
  },
];

const HowItWorksSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          How dAlert Works
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 8 }}>
          A simple 3-step path to protect your positions
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', ml: 2, borderLeft: '2px solid rgba(255, 255, 255, 0.2)' }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    pl: 4,
                    pb: 6,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '-14px',
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* Icon + Title + Description */}
                  <Box sx={{ mb: 1 }}>{step.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgb(254, 254, 254)' }}>
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default HowItWorksSection;