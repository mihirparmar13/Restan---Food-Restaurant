import React, { useState } from 'react'
import BreadcrumbSection from "../../Components/ParentHero";
import { Box, Container, Grid, Typography, TextField, Button, } from '@mui/material';
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer';


const ContactUs = () => {
    const breadcrumbLinks = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Contact Us",
            href: null, // This indicates the current page
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };


    return (
        <div>
            <BreadcrumbSection
                title="Contact Us"
                breadcrumbLinks={breadcrumbLinks}
            />
            <Box
                className="contact-style-one-area"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    pt: 15,
                    pb: 15,
                    overflow: "hidden!important",
                    "::before": {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        content: '""',
                        height: "50%",
                        width: "100%",
                        background: 'url("https://validthemes.net/site-template/restan/assets/img/shape/map.png")',
                        zIndex: 1,
                        backgroundSize: "contain",
                        opacity: 0.8,
                    },
                }}
            >
                <Box className='container'>
                    <Box className='row align-center'>
                        <Box className='col-lg-10 offset-lg-1'>
                            <Box className='contact-style-one-info'>
                                <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                                    {[
                                        { icon: "https://validthemes.net/site-template/restan/assets/img/icon/phone.png", title: "Hotline", text: "+4733378901" },
                                        { icon: "https://validthemes.net/site-template/restan/assets/img/icon/placeholder.png", title: "Our Location", text: "55 Main Street, The Grand Avenue 2nd Block, New York City" },
                                        { icon: "https://validthemes.net/site-template/restan/assets/img/icon/email.png", title: "Official Email", text: "info@restan.com" },
                                    ].map((item, index) => (
                                        <li key={index} style={{ textAlign: "center", padding: "20px", background: "rgba(255, 255, 255, 0.6)", border: "1px solid #eeeeee", borderRadius: "8px", flex: "1 1 300px", }}>
                                            <Box>
                                                <img src={item.icon} alt={item.title} style={{ height: 65, marginBottom: 25 }} />
                                            </Box>
                                            <Typography variant="h5" sx={{ fontSize: 24, mb: 1, fontWeight: 700, fontFamily: "ui-monospace" }}>
                                                {item.title}
                                            </Typography>
                                            {item.title === "Hotline" || item.title === "Official Email" ? (
                                                <a href="#" style={{ textDecoration: "none", fontWeight: 600, color: "#04000b", fontFamily: "sans-serif" }}>
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <Typography sx={{ margin: 0, color: "#666666", fontFamily: "sans-serif", fontWeight: 500 }}>
                                                    {item.text}
                                                </Typography>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                        <Box className='col-lg-10 offset-lg-1'>
                            <Box className="contact-form-style-one"
                                sx={{
                                    boxShadow: "0px 15px 60px -10px rgb(109 117 143 / 33%)",
                                    padding: "60px 80px",
                                    borderRadius: "10px",
                                    position: "relative",
                                    background: "#ffffff",
                                    zIndex: "9"
                                }}>
                                <Box className="heading" sx={{ display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <h5 className='sub-title'>Keep in touch</h5>
                                        <h2 style={{ fontWeight: "600", marginBottom: "25px", marginTop: "-5px", fontSize: "42px", lineHeight: "1.3", fontFamily: "ui-monospace" }}>Send us a Massage</h2>
                                    </Box>
                                </Box>

                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                variant="outlined"
                                                value={formData.name}
                                                onChange={handleChange}
                                                sx={{ background: "#f3f3f3" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                variant="outlined"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                sx={{ background: "#f3f3f3" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Phone"
                                                name="phone"
                                                variant="outlined"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                sx={{ background: "#f3f3f3" }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid item xs={12}>
                                                <textarea
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px",
                                                        background: "#f3f3f3",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "5px",
                                                        resize: "vertical",
                                                        fontSize: "16px",
                                                    }}
                                                    rows={4}
                                                    placeholder="Your Message"
                                                />
                                            </Grid>

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                    padding: "16px 52px",
                                                    backgroundColor: "#8c6b41",
                                                    "&:hover": { backgroundColor: "#755a34" }
                                                }}
                                            >
                                                Get In Touch
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="contact-style-one-area">
                <Box className="google-maps" sx={{ width: "100%", overflow: "hidden" }}>
                    <Box
                        component="iframe"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48396.80551058352!2d-73.97178123803711!3d40.70039461978384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1739329429521!5m2!1sen!2sus"
                        sx={{
                            width: "100%",
                            height: "90vh",
                            border: 0,
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicyc="no-referrer-when-downgrade"
                    />
                </Box>
            </Box>
            <Contact />
            <Footer />
        </div>

    )
}

export default ContactUs
