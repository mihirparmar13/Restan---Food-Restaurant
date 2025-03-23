import { Box,  Link } from '@mui/material'
import React from 'react'
import HeaderTop from './HeaderTop'
import HeroSection from './HeroSection'
import { Container } from 'react-bootstrap'

const Header = () => {

    let leftpages = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Menu',
            link: '/menu',
        }
    ]
    let rightpages = [
        {
            name: 'Blog',
            link: '/Blog'
        },
        {
            name: 'Shop',
            link: '/Shop'
        },
        {
            name: 'Contact Us',
            link: '/Contact'
        }
    ]
    return (
        <Box
            className="shadowdark"
            sx={{
                backgroundImage: 'url(https://validthemes.net/site-template/restan/assets/img/banner/14.jpg)',
                backgroundPosition: 'center',
                backgroundSize: "cover",
                height: "100vh",
                color: 'white',
                width: "100%",
            }}
        >
            <HeaderTop />
            <Box className="header" >
               <Container >
               <Box sx={{ display: 'flex', alignItems: 'center', padding: '40px 15px' }}>
                        {/* Left Section */}
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                            <Box component="nav">
                                <ul style={{ display: 'flex', margin: 0, padding: 0, listStyle: 'none' }}>
                                    {leftpages.map((item) => (
                                        <li key={item.name} style={{ marginRight: '20px' }}>
                                            <Link href={item.link}
                                                sx={{ color: 'white', textDecoration: 'none', padding: '10px', fontFamily: "sans-serif", fontWeight: "600" }}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>

                        {/* Center Logo */}
                        <Box sx={{ textAlign: 'center' }}>
                            <Link href="./">
                                <img
                                    src="https://validthemes.net/site-template/restan/assets/img/logo-light.png"
                                    alt="Logo"
                                    height="60px"
                                />
                            </Link>
                        </Box>

                        {/* Right Section */}
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Box component="nav">
                                <ul style={{ display: 'flex', margin: 0, padding: 0, listStyle: 'none' }}>
                                    {rightpages.map((item) => (
                                        <li key={item.name} style={{ marginLeft: '20px' }}>
                                            <Link href={item.link} sx={{ color: 'white', textDecoration: 'none', padding: '10px', fontFamily: "sans-serif", fontWeight: "600" }}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
               </Container>
            </Box>
            <HeroSection />
        </Box>

    )
}

export default Header
