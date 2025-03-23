import React from 'react';
import { Box } from '@mui/material';
import { Container } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <Box className="chef-area default-padding bg-gray text-center" sx={{ paddingTop: "120px", paddingBottom: "70px",position: "relative",background: "#ebe9e6",textAlign: "center",}}>
            <Container>
                <Box className="row" sx={{ display: "flex" }}>
                    <Box className="chef-text col-lg-8 offset-lg-2" sx={{ marginLeft: "16.66666667%" }}>
                        <Box className="site-heading" sx={{ marginBottom: "60px", textAlign: "center" }}>
                            <h4 className="sub-title">MASTER CHEFS</h4>
                            <h2 style={{ marginBottom: "0",fontWeight: "600",fontSize: "50px",marginTop: "-15px",fontFamily: "ui-monospace",}}>
                                Meet Our Special Chefs
                            </h2>
                        </Box>
                    </Box>
                </Box>

                <Box className="row" sx={{ display: "flex" }}>
                    {[
                        {
                            img: "https://validthemes.net/site-template/restan/assets/img/team/1.jpg",
                            name: "Alexander Petllo",
                            role: "Assistant Chef",
                        },
                        {
                            img: "https://validthemes.net/site-template/restan/assets/img/team/2.jpg",
                            name: "Mendia Juxef",
                            role: "Burger King",
                        },
                        {
                            img: "https://validthemes.net/site-template/restan/assets/img/team/3.jpg",
                            name: "Petro William",
                            role: "Main Chef",
                        },
                    ].map((chef, index) => (
                        <Box key={index} className="col-xl-4 col-lg-6 chef-box">
                            <Box className="chef-style-one">
                                <Box className="chef-thumb" sx={{ height: "280px", width: "280px",margin: "auto", position: "relative",zIndex: "1",}}>
                                    <img src={chef.img} alt={chef.name} style={{ borderRadius: "50%",transition: "all 0.35s ease-in-out",}}/>
                                    <Box className="info" sx={{ position: "absolute",left: "-15px",bottom: "0",  background: "#826a45", right: "-15px",  padding: "15px",}} >
                                        <h4 style={{ marginBottom: "4px" }}>
                                            <a style={{ textTransform: "capitalize", color: "white", fontWeight: "400", textDecoration: "none", }} href="#" > {chef.name} </a>
                                        </h4>
                                        <span style={{ color: "white", display: "block", textTransform: "uppercase", }}>{chef.role}</span>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
