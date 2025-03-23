import React from 'react';
import { Box,  Grid, Typography } from '@mui/material';
import { Container } from 'react-bootstrap'
import { Call, LocationOn, MailOutline } from '@mui/icons-material';

const contactPhoneNumber = '+4733378901';

const HeaderTop = () => {

    return (
        <Box
            className="headertop"          
            padding="20px"
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.3)',zIndex: 8,}}
            >
            <Container >
            <Grid className='top-center' justifyContent="space-between" alignItems="center" >
                    {/* Left Section */}
                    <Grid  >
                        <Box className="top-center" display="flex" alignItems="center" flex="wrap">
                            <Call sx={{ color: 'white' }} aria-label="Call icon" />
                            <Typography variant="body1" sx={{ marginLeft: 1, color: 'white' }}>
                                Phone: {contactPhoneNumber}
                            </Typography>
                            <MailOutline sx={{ marginLeft: 2, color: 'white' }} aria-label="Email icon" />
                            <Typography variant="body1" sx={{ marginLeft: 1, color: 'white' }}>
                                Email: food@restan.com
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Section */}
                    <Grid className='top-right' >
                        <Box display="flex" alignItems="center" justifyContent="flex-end">
                            <LocationOn sx={{ color: 'white' }} aria-label="Location icon" />
                            <Typography variant="body1" sx={{ marginLeft: 1, color: 'white' }}>
                                175 10th Street, Office 375 Berlin, DE 21562
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderTop;
