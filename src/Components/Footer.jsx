import { ArrowForward, Email, Facebook, LinkedIn, LocationOn, Phone, Twitter, YouTube } from '@mui/icons-material';
import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';


const Footer = () => {
  const socialIcons = [
    { name: 'Facebook', Icon: Facebook },
    { name: 'Twitter', Icon: Twitter },
    { name: 'YouTube', Icon: YouTube },
    { name: 'LinkedIn', Icon: LinkedIn },
  ];

  return (
    <div >
      <Container className='W-100'>
        <Box className="footer" 
          sx={{
            padding: '80px',
            paddingTop: '30px',
            position: 'relative',
            zIndex: 2,
            backgroundColor: '#1b1b1b',
            color: 'rgba(248, 249, 250, 1)',
          }}
        >
          <Grid container className='row'>
            {/* About Us */}
            
            <Grid className='col-lg-3 col-md-6' sx={{ mt: 5 }}>
              <Box className='footer-About'
                sx={{
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                  paddingRight: '30px',
                  paddingBottom: '30px',
                }}
              >
                <h4
                  style={{
                    marginBottom: '30px',
                    fontWeight: '700',
                    fontFamily: 'ui-monospace',
                    fontSize: '1.5rem',
                  }}
                >
                  About Us
                </h4>
                <p
                  style={{
                    margin: '0 0 25px',
                    textTransform: 'none',
                    fontWeight: '500',
                    fontFamily: 'sans-serif',
                    color: '#cccccc',
                    lineHeight:"1.8"
                  }}
                >
                  Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                </p>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {socialIcons.map(({ name, Icon }, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'inline-block',
                        margin:"5px"
                      }}
                    >
                      <IconButton
                        href="#"
                        aria-label={name}
                        sx={{
                          color: 'rgba(248, 249, 250, 1)',
                          textDecoration: 'none',
                          borderRadius: 'inherit',
                          height: '40px',
                          width: '40px',
                          backgroundColor: '#333333',
                          '&:hover': {
                            backgroundColor: '#555555',
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>

            {/* Explore */}
            <Grid className='col-lg-3 col-md-6' sx={{ mt: 5 }}>
              <Box className="footer-Explore" sx={{ paddingLeft: '50px' }}>
                <h4
                  style={{
                    marginBottom: '30px',
                    fontWeight: '700',
                    fontFamily: 'ui-monospace',
                    fontSize: '1.5rem',
                  }}
                >
                  Explore
                </h4>
                <ul className='footer-rigth'>
                  {['Company Profile', 'About', 'Help Center', 'Career', 'Features', 'Contact'].map((item, index) => (
                    <li key={index} style={{ marginTop: index === 0 ? '0' : '10px' }}>
                      <a
                        style={{
                          fontWeight: '400',
                          color: '#cccccc',
                          lineHeight:"1.8",
                          textDecoration: 'none',
                          '&:hover': { color: '#fff' },
                        }}
                        href="#"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Box>
            </Grid>

            {/* Contact */}
            <Grid className='col-lg-3 col-md-6' sx={{ mt: 5 }}>
              <Box>
                <h4
                  style={{
                    marginBottom: '30px',
                    fontWeight: '700',
                    fontFamily: 'ui-monospace',
                    fontSize: '1.5rem',
                  }}
                >
                  Contact
                </h4>
                <ul className='footer-rigth'> 
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginTop:"20px"}}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '35px',
                        width: '35px',
                        backgroundColor: '#826a45',
                        borderRadius: '5px',
                        marginRight: '15px',
                        color: 'white',
                      }}
                    >
                      <LocationOn />
                    </Box>
                    <Box sx={{ color: "#cccccc", fontWeight: "400", lineHeight:"1.8"}}>
                      175 10th Street, Office 375 Berlin, De 21562
                    </Box>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', marginTop:"20px"}}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '35px',
                        width: '35px',
                        backgroundColor: '#826a45',
                        borderRadius: '5px',
                        marginRight: '15px',
                        color: 'white',
                      }}
                    >
                      <Phone />
                    </Box>
                    <Box sx={{lineHeight:"1.8"}}>
                      <a href="" style={{ color: "#cccccc", fontWeight: "400" }}>+123 34598768</a>
                      <br />
                      <a href="" style={{ color: "#cccccc", fontWeight: "400" }}>+554 34598734</a>
                    </Box>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px',marginTop:"20px"}}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '35px',
                        width: '35px',
                        backgroundColor: '#826a45',
                        borderRadius: '5px',
                        marginRight: '15px',
                        color: 'white',
                      }}
                    >
                      <Email />
                    </Box>
                    <Box>
                      <a href="" style={{ color: "#cccccc", fontWeight: "400" }}>food@restan.com</a>
                    </Box>
                  </li>
                </ul>
              </Box>
            </Grid> 

            {/* Newsletter */}
            <Grid className='col-lg-3 col-md-6' sx={{ mt: 5 }}>
              <Box>
                <h4
                  style={{
                    marginBottom: '30px',
                    fontWeight: '700',
                    fontFamily: 'ui-monospace',
                    fontSize: '1.5rem',
                  }}
                >
                  Newsletter
                </h4>
                <p style={{ color: "#cccccc",margin:"0 0 25px", lineHeight:"1.8"}}>Join our subscribers list to get the latest news and special offers.</p>
                <Box>
                  <form action="#" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,225,225,0.4)',
                        borderRadius: '0',
                        padding: '10px 15px',
                        color: 'white',
                        flex: 1, // Ensures the input field takes up the available space
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '0',
                        background: 'transparent',
                        position: 'absolute',
                        right: '0',
                        top: '0',
                        lineHeight: '50px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowForward style={{ color: 'white' }} />
                    </button>
                  </form>
                </Box>
                <fieldset
                  style={{
                    padding: "0",
                    border: "0",
                    minWidth: "0",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="privacy"
                    style={{
                      minHeight: "auto",
                      position: "relative",
                      marginRight: "10px",
                      border: "1px solid #e7e7e7",
                      borderRadius: "inherit",
                      boxShadow: "inherit",
                    }}
                  />
                  <label
                    style={{
                      margin: "0",
                      display: "inline-block",
                      fontWeight: "normal",
                      maxWidth: "100%",
                    }}
                  >
                    I agree to the Privacy Policy
                  </label>
                </fieldset>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box className="footer-bottom text-light" sx={{padding:"50px 0", position:"relative", zIndex:"1", opacity:"1", color:"rgb(248 249 250)"}}>
        <Box className="footer-bottom-shape" sx={{position:"absolute", left:"0", bottom:"0"}}>
          <img src="https://validthemes.net/site-template/restan/assets/img/shape/9.png" alt="Image Not Found"  style={{width:"35%", height:"auto", opacity:"0.4"}}/>
        </Box>

        <Container>
        <Grid container spacing={3} sx={{alignItems:"center"}}>
          <Grid item xs={12} lg={6}>
            <Box className="footer-logo" sx={{position:"relative", zIndex:"1"}}>
              <img src="https://validthemes.net/site-template/restan/assets/img/logo-light.png" alt="Logo" style={{height:"60px", maxWidth:"100%", border:"none", outline:"none"}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </div>
    
  );
};

export default Footer;
