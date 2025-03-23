import React from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import { FaUtensils } from "react-icons/fa6";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const 
AboutUs = () => {
    const sliderItems = [
        { id: 1, image: "https://validthemes.net/site-template/restan/assets/img/menu/26.jpg", alt: "Menu item 1" },
        { id: 2, image: "https://validthemes.net/site-template/restan/assets/img/menu/27.jpg", alt: "Menu item 2" },
        { id: 3, image: "https://validthemes.net/site-template/restan/assets/img/menu/28.jpg", alt: "Menu item 3" },
        { id: 4, image: "https://validthemes.net/site-template/restan/assets/img/menu/25.jpg", alt: "Menu item 4" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ],
    };

    const sliderImageStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '10px',
    };

    return (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Container>

                { /* feature-style-three-area*/  }
                <Box sx={{ marginBottom: '-50px' }}>
                    <Grid className="column-direction" container spacing={2} >
                        {/* Booking Form */}
                        <Grid className='Booking-form' item xs={12} md={5} sx={{ paddingRight: "80px" }}>
                            <Box className="reservation-form light"
                                sx={{
                                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                                    top: '-50px',
                                    zIndex: "9",
                                    borderRadius: '30px',
                                    marginTop: '-50px',
                                    position: 'relative',
                                    padding: '70px 60px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        height: '80px',
                                        width: '80px',
                                        lineHeight: '70px',
                                        textAlign: 'center',
                                        background: '#826a45',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '30px',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        top: '-45px',
                                        border: '5px solid white',
                                    }}
                                >
                                    <FaUtensils />
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        marginBottom: "30px",
                                        fontSize: "30px",
                                        fontWeight: "600",
                                        fontFamily: 'ui-monospace',
                                    }}
                                >
                                    Book a table
                                </Typography>
                                <form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="phone"
                                                name="phone"
                                                placeholder="Phone"
                                                variant="outlined"
                                                size="small"
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                select
                                                fullWidth
                                                id="persons"
                                                name="persons"
                                                variant="outlined"
                                                size="small"
                                                margin="normal"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                <option value="1">1 Person</option>
                                                <option value="2">2 Persons</option>
                                                <option value="3">3 Persons</option>
                                                <option value="4">4 Persons</option>
                                                <option value="5">5 Persons</option>
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                type="date"
                                                fullWidth
                                                id="date"
                                                name="date"
                                                variant="outlined"
                                                size="small"
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                select
                                                fullWidth
                                                id="timeslot"
                                                name="timeslot"
                                                variant="outlined"
                                                size="small"
                                                margin="normal"
                                                SelectProps={{
                                                    native: true,
                                                }}
                                            >
                                                <option value="1">10:00 AM</option>
                                                <option value="2">11:00 AM</option>
                                                <option value="3">12:00 PM</option>
                                                <option value="4">1:00 PM</option>
                                                <option value="5">2:00 PM</option>
                                            </TextField>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                    marginTop: '15px',
                                                    fontWeight: '600',
                                                    textTransform: 'capitalize',
                                                    borderRadius: '7px',
                                                    fontSize: '16px',
                                                    padding: '14px 40px',
                                                    backgroundColor: '#826a45',
                                                    color: 'white',
                                                }}
                                            >
                                                Book A Table
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Grid>

                        {/* Slider Section */}
                        <Grid className='slider' item xs={12} md={7} >
                            <Box className="sliderdown" sx={{ paddingTop: '120px' }}>
                                <Box className="food-cat-items">
                                    <Typography
                                        component="h2"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            paddingRight: '140px',
                                            fontSize: '40px',
                                            marginBottom: '35px',
                                            fontFamily: 'ui-monospace',
                                        }}
                                    >
                                        <img
                                            src="https://validthemes.net/site-template/restan/assets/img/shape/fire.png"
                                            alt="Fire icon"
                                            style={{
                                                marginRight: '8px',
                                                position: 'relative',
                                                top: '2px',
                                            }}
                                        />
                                        Our Popular Category
                                    </Typography>
                                    <Slider {...settings}>
                                        {sliderItems.map((item) => (
                                            <Box key={item.id} sx={{ padding: '0 10px' }}>
                                                <img className='sliderImage'
                                                    src={item.image}
                                                    alt={item.alt}
                                                    style={sliderImageStyle}
                                                />
                                            </Box>
                                        ))}
                                    </Slider>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* choose-us-style-one-one-area  */}
                <Box className='choose-us-style-one-one-area' sx={{ paddingTop: "120px", paddingBottom: "120px" }}>
                    <Grid className='row'   >
                        <Grid className="col-lg-4 col-md-6 col-12 choose-us-style-one" style={{ position: "relative", zIndex: "1", padding: "50px" }}>
                            <div className="item animate fadeInUp animated" data-animate="fadeInUp" style={{ visibility: "visible" }}>
                                <img src="https://validthemes.net/site-template/restan/assets/img/icon/13.png" alt="" style={{ height: "100px", marginBottom: "30px" }} />
                                <h4 style={{ fontSize: "24px", fontFamily: "ui-monospace" }}>Quality Foods</h4>
                                <p style={{ color: "#666666", margin: "0 0 25px", textTransform: "none", fontWeight: "500", fontFamily: "Lato, sans-serif" }}>
                                    Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                                </p>
                            </div>
                        </Grid>

                        <Grid className="col-lg-4 col-md-6 col-12 choose-us-style-one" style={{ position: "relative", zIndex: "1", padding: "50px", borderBottom: "1px solid #826a45", borderRadius: "30px" }}>
                            <div className="item animate fadeInUp animated" data-animate="fadeInUp" style={{ visibility: "visible" }}>
                                <img src="https://validthemes.net/site-template/restan/assets/img/icon/14.png" alt="" style={{ height: "100px", marginBottom: "30px" }} />
                                <h4 style={{ fontSize: "24px", fontFamily: "ui-monospace" }}>Fast Delivery</h4>
                                <p style={{ color: "#666666", margin: "0 0 25px", textTransform: "none", fontWeight: "500", fontFamily: "Lato, sans-serif" }}>
                                    Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                                </p>
                            </div>
                        </Grid>

                        <Grid className="col-lg-4 col-md-6 col-12 choose-us-style-one" style={{ position: "relative", zIndex: "1", padding: "50px", borderTop: "1px solid #826a45", borderRadius: "30px" }}>
                            <div className="item animate fadeInUp animated" data-animate="fadeInUp" style={{ visibility: "visible" }}>
                                <img src="https://validthemes.net/site-template/restan/assets/img/icon/15.png" alt="" style={{ height: "100px", marginBottom: "30px" }} />
                                <h4 style={{ fontSize: "24px", fontFamily: "ui-monospace" }}>Delicious Recipes</h4>
                                <p style={{ color: "#666666", margin: "0 0 25px", textTransform: "none", fontWeight: "500", fontFamily: "Lato, sans-serif" }}>
                                    Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>

                {/* big-deal-area */}
                <Box className="deal-style-one-items" sx={{ backgroundImage: "url(https://validthemes.net/site-template/restan/assets/img/shape/4.jpg)", padding: "120px" }}>
                    <div className="container">
                        <div className="row align-items-center row-space">

                            {/* Left Section */}
                            <div className="col-lg-6 col-12 mb-4 mb-lg-0 position-relative">
                                <div className="deal-thumb position-relative">

                                    {/* First Image */}
                                    <img src="https://validthemes.net/site-template/restan/assets/img/illustration/1.png"
                                        alt="Vegetarian Dish 1"
                                        className=" img-first position-relative"
                                        style={{ top: "-200px", marginTop: "135px", padding: "15px", width: "50%" }}
                                    />

                                    {/* Second Image */}
                                    <img src="https://validthemes.net/site-template/restan/assets/img/illustration/15.png"
                                        alt="Vegetarian Dish 2"
                                        className=" img-second position-absolute"
                                        style={{ right: "0", top: "50%", transform: "translateY(-55%)", width: "60%", padding: "10px" }}
                                    />

                                    {/* Third Image */}
                                    <img src="https://validthemes.net/site-template/restan/assets/img/illustration/12.png"
                                        alt="Vegetarian Dish 3"
                                        className=" img-third position-absolute"
                                        style={{ bottom: "-49px", left: "7px", width: "50%", padding: "35px" }}
                                    />

                                    {/* Offer Badge */}
                                    <div className="offer-badge ">
                                        "Save" <strong style={{ fontWeight: "700" }}>55%</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-lg-6 col-12">
                                <div className="deal-info  text-lg-start">
                                    <h4 className="sub-heading" style={{ color: "#000" }}>Today Special Offer</h4>
                                    <h2>Explore Irresistible Promotions!</h2>
                                    <p>
                                        Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant
                                        stuff. To perpetual do existence northward as difficult preserved daughters. Continued
                                        at up to zealously necessary.
                                    </p>
                                    <a className="btn btn-theme circle btn-md animation" href="#">
                                        Order Today
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </Box>

            </Container>
        </Box>
    );
};

export default AboutUs;
