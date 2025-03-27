import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import heroImage from '../assets/hero.png';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                py: 10,
            }}
        >
            <Navbar />
            <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, flexGrow: 1, display: 'flex', alignItems: 'center', marginRight: 8 }}>
                <Grid container spacing={15} alignItems="center" justifyContent="center">
                    {/* Text Content */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                                Liquidation Alerting for dYdX Traders
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4 }}>
                                Get instant alerts when your position is at risk of liquidation or auto-deleveraging — before it's too late.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                sx={{
                                    borderRadius: '25px',
                                    px: 4,
                                    py: 1.5,
                                    fontWeight: 'bold',
                                }}
                            >
                                Join Waitlist
                            </Button>
                        </Box>
                    </Grid>

                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            className="gradient-border"
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                                mt: { xs: 4, md: 0 },
                            }}
                        >
                            <img
                                src={heroImage}
                                alt="dAlert app mockup"
                                style={{
                                    width: '100%',
                                    maxWidth: 420,
                                    height: 'auto',
                                    borderRadius: 12,
                                    boxShadow: '0 10px 30px rgba(210, 43, 43, 0.3)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;