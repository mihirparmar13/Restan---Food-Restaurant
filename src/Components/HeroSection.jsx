import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { FaRightLong } from "react-icons/fa6";
import SideNav from './SideNav';

const HeroSection = () => {
    const isTabletSize = useMediaQuery('(max-width:1024px)');
    return (
        <Box>
             {isTabletSize && <SideNav/>}
            <Container>
                <i class="fa-solid fa-arrow-right"></i>
                <Box className="row hero-text-area" sx={{ alignItems: "center" }}>
                    <Grid container spacing={2} sx={{ height: "auto" }}>
                        <Grid item xs={8} sx={{ marginLeft: "16.66666667%", textAlign: "center" }}>
                            <h2 className='hero-text' style={{ fontSize: "100px", color: "white", fontFamily: "ui-monospace", margin: "0", marginBottom: "15px" }}>
                                Best Restaurant
                            </h2>

                            <Box className="curve-text" height={"auto"} sx={{ marginTop: "50px" }}>
                                <svg className='icone' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" >
                                    <text>
                                        <textPath href="#curve" startOffset="50%" textAnchor="middle" style={{ letterSpacing: "4px", textTransform: "uppercase", }} >
                                            Best Food Since - 1865 - In UK -
                                        </textPath>
                                    </text>
                                    <defs>
                                        <path id="curve" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                    </defs>
                                </svg>
                                <a href="https://www.youtube.com/watch?v=-4ahrKWt05I" target="_blank" rel="noopener noreferrer">
                                    <FaRightLong className='arow' />
                                </a>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    )
}

export default HeroSection
