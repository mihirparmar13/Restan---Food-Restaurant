import React from "react";
import BreadcrumbSection from "../../Components/ParentHero";
import { Box, Container, } from "@mui/material";
import Slider from "react-slick";
import Testimonials from "../../Components/Testimonials";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

const About = () => {
  const brandImages = [
    "https://validthemes.net/site-template/restan/assets/img/brand/1.png",
    "https://validthemes.net/site-template/restan/assets/img/brand/2.png",
    "https://validthemes.net/site-template/restan/assets/img/brand/3.png",
    "https://validthemes.net/site-template/restan/assets/img/brand/4.png",
    "https://validthemes.net/site-template/restan/assets/img/brand/5.png"
  ];

  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {    
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ],
  };
  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: null },
  ];

  return (
    <Box>
      {/* Breadcrumb Section */}
      <BreadcrumbSection title="About Us" breadcrumbLinks={breadcrumbLinks} />
      {/* Slider Section */}
      <Box
        sx={{
          pt: 15,
          pb: 15,
          position: "relative",
          backgroundColor: "#ebe9e6",
          backgroundImage: "url('https://validthemes.net/site-template/restan/assets/img/shape/1.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <Box className='container Slider'>
          <Box display="flex" justifyContent="center">
            <h4 className="sub-title">OUR TRUSTED 8K HAPPY PARTNER</h4>
          </Box>
          <div style={{ paddingTop: "40px" }}>
            <Slider {...settings}>
              {brandImages.map((src, index) => (
                <div className="About-slide"  key={index} style={{ width: "211.5px", marginRight: "30px" }}>
                  <img src={src} alt={`Brand ${index + 1}`} style={{ maxHeight: "100px", margin: "auto" }} />
                </div>
              ))}
            </Slider>
          </div>
        </Box>
      </Box>

      {/* About Section */}
      <Box className='about-area' sx={{ marginBottom: "80px", paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
        <Box className="about-thumb" sx={{
          position: "absolute", left: "0", top: "120px", width: "50%", bottom: "120px", display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "30px"
        }}>
          <Box className="item"
            sx={{
              backgroundImage: `url("https://validthemes.net/site-template/restan/assets/img/about/2.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></Box>
          <Box className="item"
            sx={{
              backgroundImage: `url("https://validthemes.net/site-template/restan/assets/img/about/3.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></Box>
        </Box>
        <Box className='container' >
          <Box className='row' >
            <Box className=' col-lg-6 offset-lg-6' >
              <Box className='about-style-one-info' sx={{
                boxShadow: "0px 2px 60px 0px rgba(0, 0, 0, 0.1)",
                background: "white",
                padding: "80px",
                marginLeft: "-20px",
                position: "relative",
                top: "80px"
              }}>
                <img className="about-shap-img" src="https://validthemes.net/site-template/restan/assets/img/shape/2.png" alt=""
                  style={{
                    position: "absolute",
                    height: "100px",
                    right: "-100px",
                    zIndex: "-1",
                    top: "-65px",
                  }}
                />
                <h4 className="sub-heading " style={{ padding: "0", paddingRight: "10px" }}>About us</h4>
                <h2 className="title" style={{ fontSize: "42px" }}>
                  We Invite You
                  <br />
                  To Visit Our Restaurant
                </h2>
                <p style={{ color: "#666666", margin: "0 0 40px", fontWeight: "500", fontFamily: "sans-serif", textTransform: "none" }}>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                </p>
                <a href="" style={{ color: "white", border: "none", background: "#826a45", padding: "16px 35px", fontSize: "16px", textDecoration: "none", marginTop: "10px" }}>
                  Discover More
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
};

export default About;
