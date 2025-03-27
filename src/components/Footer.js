import React from 'react';
import { Box, Container, Typography, IconButton, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterSection = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)', color: 'white' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            &copy; {new Date().getFullYear()} dAlert. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <Link href="#" underline="none" color="inherit" variant="body2">
              Privacy
            </Link>
            <Link href="#" underline="none" color="inherit" variant="body2">
              Terms
            </Link>
            <Link href="#" underline="none" color="inherit" variant="body2">
              Contact
            </Link>
            <IconButton href="https://github.com" target="_blank" color="inherit" size="small">
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSection;