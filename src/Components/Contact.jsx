import { Box, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
      <Container>
        <Box className="opening-hour-items" sx={{ position: "relative" }}>
          <h2 className="text-fixed">Restan</h2>
          {/* Decorative Shape */}
          <Box className="shape" sx={{ position: "absolute", right: "-5%", bottom: "-180px", opacity: 0.2 }}>
            <img
              src="https://validthemes.net/site-template/restan/assets/img/shape/4.png"
              alt="Decorative Shape"
              style={{ height: "320px" }}
            />
          </Box>

          <Box className="row" rowGap={5}>
            <Box className="video-top col-lg-6 col-12 text-center" style={{ marginTop: "6rem" }}>
              <Box className="opening-hours-thumb"
              >
                 <iframe
                  id="youtube-player"
                  className="w-100"
                  style={{ height: "500px", border: "none" }}
                  src="https://www.youtube.com/embed/yuTSVom_pBY?autoplay=1&controls=0&rel=0&fs=0"
                  title="New Video Title"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Box>


            <Box className="col-lg-6 col-12">
              <Box className="opening-hours-info animate fadeInLeft animated" sx={{ background: "white", padding: "80px", boxShadow: "0px 2px 60px 0px rgba(0, 0, 0, 0.1)", marginLeft: "-5%", position: "relative", zIndex: "1", visibility: "visible" }}>
                <Typography className='card-header-text'  variant="h3" sx={{ fontWeight: "700", fontSize: "30px", fontFamily: "ui-monospace", margin:"0 0 15px" }}>
                  Opening Hours
                </Typography>
                <Typography sx={{ color: "#666666", margin: "0 0 25px", textDecoration: "none", fontWeight: "500", fontFamily: "sans-serif" }}>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
                </Typography>
                <ul className="opening-hours-table" style={{ margin: "0", padding: "0", listStyle: "none" }}>
                  <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: "600", textTransform: "capitalize", marginTop: "8px", color: "black", position: "relative", zIndex: "1" }}>
                    <h6 style={{ margin: "0", background: "white", paddingRight: "30px", fontSize: "16px" }}>Sunday to Tuesday:</h6>
                    <span style={{ background: "white", paddingLeft: "30px" }}>10:00 - 09:00</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: "600", textTransform: "capitalize", marginTop: "8px", color: "black", position: "relative", zIndex: "1" }}>
                    <h6 style={{ margin: "0", background: "white", paddingRight: "30px", fontSize: "16px" }}>Wednesday to Thursday:</h6>
                    <span style={{ background: "white", paddingLeft: "30px" }}>11:30 - 10:30</span>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: "600", textTransform: "capitalize", marginTop: "8px", color: "black", position: "relative", zIndex: "1" }}>
                    <h6 style={{ margin: "0", background: "white", paddingRight: "30px", fontSize: "16px" }}>Friday & Saturday:</h6>
                    <span style={{ background: "white", paddingLeft: "30px" }}>10:30 - 12:00</span>
                  </li>
                </ul>

                <Box className="call-to-action" sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                  <Box className="icon" sx={{ height: "80px", width: "80px", lineHeight: "80px", background: "#826a45", textAlign: "center", borderRadius: "50%", marginRight: "20px" }}>
                    <img src="https://validthemes.net/site-template/restan/assets/img/icon/6.png" alt="Image Not Found" />
                  </Box>
                  <Box className="info">
                    <Typography sx={{ marginBottom: "5px", color: "#666666", textTransform: "none", fontWeight: "500", fontFamily: "sans-serif" }}>
                      Call Anytime
                    </Typography>
                    <Typography sx={{ fontSize: "20px", color: '#04000b' }}>
                      <a href="tel:+964733378901" style={{ color: "#04000b", textDecoration: "none" }}>
                        +964733-378901
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Contact
