import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";


const GalleryBlog = () => {
    return (
        <Box sx={{ paddingTop: "120px", paddingBottom: "90px" }}>
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Box sx={{ textAlign: 'center', marginBottom: "60px" }}>
                            <Typography className='sub-title' variant="h6" sx={{ textTransform: "uppercase", color: "#826a45", fontWeight: 600, marginBottom: "25px", position: "relative", zIndex: 1, display: "inline-block", fontSize: "20px", padding: "0 10px", fontFamily: "ui-monospace" }}>
                                News & Blog
                            </Typography>
                            <Typography variant='h2' sx={{ marginBottom: "0", fontSize: "36px", fontWeight: "600", fontFamily: "ui-monospace" }}>
                                Our Latest News & Blog
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <div className="container d-flex justify-content-center">
                    <div className="row g-3">
                        <div className="col-lg-6 col-12">
                            <div className="home-blog-style-one-item position-relative">
                                <img src="https://validthemes.net/site-template/restan/assets/img/blog/1.jpg" alt="" className="img-fluid" />
                                <div className="content p-4 position-relative" style={{ top: "-100px", marginBottom: "-80px" }}>
                                    <div className="info bg-white shadow p-5 position-relative">
                                        <div className="date text-center text-white bg-dark position-absolute" style={{ height: "80px", width: "80px", lineHeight: "1.2", display: "flex", flexDirection: "column", justifyContent: "center", textTransform: "uppercase", right: "30px", top: "-40px" }}>
                                            <strong className="d-block fs-3 fw-bold">24</strong> Dec
                                        </div>
                                        <ul className="list-unstyled mb-3">
                                            <li className="fw-semibold text-secondary"> by <a href="#" className="fw-semibold text-secondary text-decoration-none">Md Sohag</a></li>
                                            <li>
                                                <a href="#" className="fw-semibold text-secondary text-decoration-none">Burger</a> ,
                                                <a href="#" className="fw-semibold text-secondary text-decoration-none">Food</a>
                                            </li>
                                        </ul>
                                        <h4 className="fs-4 fw-semibold mt-n3">
                                            <a href="#" className="gallery-text text-dark text-decoration-none">Picked up a Brussels burger Sprouts with ham</a>
                                        </h4>
                                        <a href="#" className="text-uppercase d-inline-block mt-2 text-warning fs-6 text-decoration-none">
                                            Read More
                                            <i className="fa fa-arrow-right ms-1" style={{ transform: "rotate(-45deg)", fontSize: "14px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="home-blog-style-one-item position-relative">
                                <img src="https://validthemes.net/site-template/restan/assets/img/blog/2.jpg" alt="" className="img-fluid" />
                                <div className="content p-4 position-relative" style={{ top: "-100px", marginBottom: "-80px" }}>
                                    <div className="info bg-white shadow p-5 position-relative">
                                        <div className="date text-center text-white bg-dark position-absolute" style={{ height: "80px", width: "80px", lineHeight: "1.2", display: "flex", flexDirection: "column", justifyContent: "center", textTransform: "uppercase", right: "30px", top: "-40px" }}>
                                            <strong className="d-block fs-3 fw-bold">18</strong> Nov
                                        </div>
                                        <ul className="list-unstyled mb-3">
                                            <li className="fw-semibold text-secondary"> by <a href="#" className="fw-semibold text-secondary text-decoration-none">Md Sohag</a></li>
                                            <li>
                                                <a href="#" className="fw-semibold text-secondary text-decoration-none">Burger</a> ,
                                                <a href="#" className="fw-semibold text-secondary text-decoration-none">Food</a>
                                            </li>
                                        </ul>
                                        <h4 className="fs-4 fw-semibold mt-n3">
                                            <a href="#" className="gallery-text text-dark text-decoration-none">This prefabricated passive house is highly sustainable</a>
                                        </h4>
                                        <a href="#" className="text-uppercase d-inline-block mt-2 text-warning fs-6 text-decoration-none">
                                            Read More
                                            <i className="fa fa-arrow-right ms-1" style={{ transform: "rotate(-45deg)", fontSize: "14px" }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </Box>
    );
};

export default GalleryBlog;
