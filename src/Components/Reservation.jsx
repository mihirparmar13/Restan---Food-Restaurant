import React from 'react'
import { Box } from '@mui/material';
import { FaAppStore } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Container } from 'react-bootstrap';

const Reservation = () => {
  return (
    <Box sx={{ paddingTop: '120px', position: 'relative' }}>
      <Container>
        <Box className="download-app-items"
          sx={{
            backgroundImage: 'url(https://validthemes.net/site-template/restan/assets/img/shape/21.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundColor: '#1b1b1b',
            color: 'white',
            padding: '120px 50px',
            borderRadius: '20px',
            opacity: 1,
          }}
        >
          <div className="container">
            <div className="gap row align-items-center">
              {/* Left Section: Image */}
              <div className="col-lg-5 col-12 ">
                <div className="fadeInUp">
                  <img
                    src="https://validthemes.net/site-template/restan/assets/img/illustration/16.png"
                    alt="Illustration"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* Right Section: Text & Buttons */}
              <div className="col-lg-6 col-12 mt-4 mt-lg-0 align-items-center">
                <h2 className="reservation-card-font fw-bold mb-4" style={{ fontSize: '50px' }}>
                  Are you Ready to Start your Online Order?
                </h2>
                <p className="text-secondary" style={{ fontWeight: 500, fontFamily: "'Lato', sans-serif" }}>
                  Indulgence diminution so discovered mr apartments. Are off under folly death wrote
                  cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits
                  hearts. Resolve parties but why she shewing. She sang know now.
                </p>

                {/* Buttons */}
                <div className="d-flex gap-3 mt-3">
                  <button className="btn btn-light border-dark px-4 py-3 fw-bold">
                    <FaAppStore className="me-2" /> App Store
                  </button>
                  <button className="play-store btn btn-light border-dark px-4 py-3 fw-bold">
                    <FaGooglePlay className="me-2" /> Play Store
                  </button>
                </div>
              </div>
            </div>
          </div>

        </Box> 
      </Container>
    </Box>

  )
}

export default Reservation
