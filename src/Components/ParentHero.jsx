import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Link, useMediaQuery } from "@mui/material";
import { Call, MailOutline, ChevronRight } from "@mui/icons-material";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

const contactPhoneNumber = "+4733378901";

const ParentHero = ({ title, breadcrumbLinks }) => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);

    const centerpage = [
        { name: "Home", link: "./" },
        { name: "About", link: "./about" },
        { name: "Menu", link: "./menu" },
        { name: "Blog", link: "./Blog" },
        { name: "Shop", link: "./Shop" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isTabletSize]);

    var isTabletSize = useMediaQuery('(max-width:1024px)');
    return (

        <>
            {/* Top Header */}
            <Box className='other-header-top' sx={{ padding: 2, borderBottom: "1px solid rgba(255, 255, 255, 0.3)", backgroundColor: "#826a45" }}>
                <Box className='container'>
                    <Grid className="other-top-center" container justifyContent="space-between" alignItems="center">
                        <Grid >
                            <Box className='other-top-center' display="flex" alignItems="center" flexWrap="wrap">
                                <Call sx={{ color: "white" }} />
                                <Typography sx={{ ml: 1, color: "white" }}>Phone: {contactPhoneNumber}</Typography>
                                <MailOutline sx={{ ml: 2, color: "white" }} />
                                <Typography sx={{ ml: 1, color: "white" }}>Email: food@restan.com</Typography>
                            </Box>
                        </Grid>
                        <Grid >
                            <Box className='other-top-right' display="flex" justifyContent="flex-end" gap={2}>
                                <Box display="flex" gap={2} color="white" fontSize="1.2rem">
                                    <FaFacebookF />
                                    <FaTwitter />
                                    <FaYoutube />
                                    <FaLinkedinIn />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* Navbar */}  
            {isTabletSize && <SideNav />}
            <nav className="nav" style={{
                borderBottom: scroll ? "none " : "1px solid rgba(255, 255, 255, 0.2) ",
                top: scroll ? "0" : "72px",
                display: "block",
                position: scroll ? "fixed" : "absolute",
                width: "100%",
                zIndex: "100",
                padding: "10px 0",
                backgroundColor: scroll ? "white" : "transparent",
                transition: "top 0.3s ease-in-out, background-color 0.3s ease-in-out",
            }}>
                <Box className='container OtherPageHeader' sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative' }}>
                    {/* Logo */}
                    <Box>
                        <Link href="#">
                            <img
                                src="https://validthemes.net/site-template/restan/assets/img/logo-light.png"
                                alt="Restaurant Logo"
                                style={{ height: "60px", filter: scroll ? "invert(1)" : "none" }}
                            />
                        </Link>
                    </Box>

                    {/* Navigation */}
                    <Box component="ul" sx={{ display: "flex", gap: 3, listStyle: "none", margin: 0, padding: 0 }}>
                        {centerpage.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.link}
                                    sx={{
                                        color: scroll ? "black" : "white",
                                        textDecoration: "none",
                                        fontWeight: "600",
                                        padding: "10px",
                                        transition: "color 0.3s ease-in-out",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </Box>

                    {/* Reservation Button */}
                    <Box>
                        <Link
                            onClick={() => navigate("/contact")}
                            sx={{
                                textDecoration: "none",
                                color: "white",
                                border: scroll ? "none" : "2px solid rgba(255, 255, 255, 0.8)",
                                borderRadius: scroll ? "50px" : "0px`",
                                padding: "10px 20px",
                                cursor: "pointer",
                                transition: "all 0.3s ease-in-out",
                                background: scroll ? "#826a45" : "transparent",

                            }}
                        >
                            Reservation
                        </Link>
                    </Box>
                </Box>
            </nav>

            {/* Hero Section */}
            <Box
                className="shadowdark"
                sx={{
                    backgroundImage: 'url("https://validthemes.net/site-template/restan/assets/img/shape/5.jpg")',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    padding: "150px 0",
                    color: "white",
                    paddingTop:'235px '
                }}
            >
                <Container>
                    <Grid container justifyContent="center">
                        <Grid item xs={12}>
                            <Typography
                                variant="h1"
                                align="center"
                                fontWeight="600"
                                fontSize="48px"
                                mb={2}
                                fontFamily="ui-monospace"
                            >
                                {title}
                            </Typography>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: 0,
                                    listStyle: "none",
                                    fontWeight: "600",
                                    fontSize: "17px",
                                }}
                            >
                                {breadcrumbLinks.map((link, index) => (
                                    <li key={index}>
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                sx={{
                                                    textDecoration: "none",
                                                    color: "inherit",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {link.label === "Home" && (
                                                    <IoMdHome
                                                        style={{
                                                            marginRight: "3px",
                                                            fontSize: "20px",
                                                            fontWeight: "900",
                                                        }}
                                                    />
                                                )}
                                                {link.label}
                                                {index < breadcrumbLinks.length - 1 && (
                                                    <ChevronRight sx={{ fontSize: "20px", marginTop: "2px" }} />
                                                )}
                                            </Link>
                                        ) : (
                                            <span>{link.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ParentHero;
