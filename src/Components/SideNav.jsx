import React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Menu", link: "/menu" },
    { name: "Blog", link: "/blog" },
    { name: "Shop", link: "/shop" },
];

const SideNav = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div style={{ background: "white", position: "relative" }}>
            <Container className='SideNav' style={{ display: "flex", alignItems: "center", position: "relative", height: "80px" }}>
                
               
                <IconButton 
                    sx={{ border: "none", padding: "22px 0" }} 
                    variant="outlined" 
                    color="neutral" 
                    onClick={() => setOpen(true)}
                >
                    <Menu />
                </IconButton>
                <a 
                    href="#" 
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <img
                        src="https://validthemes.net/site-template/restan/assets/img/logo.png"
                        alt="Logo"
                        style={{ height: "auto", maxHeight: "60px" }}
                    />
                </a>

                {/* Side Drawer */}
                <Drawer open={open} onClose={() => setOpen(false)} sx={{ '& .MuiDrawer-paper': { width: 400 } }}>
                    <Box p={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "space-between",
                            }}
                        >
                            <img 
                                src="https://validthemes.net/site-template/restan/assets/img/logo.png" 
                                alt="Logo" 
                                height="60px" 
                                style={{ marginBottom: "30px" }} 
                            />
                            <ModalClose id="close-icon" sx={{ position: 'initial', border: "1px solid", borderRadius: "30px" }} />
                        </Box>

                        {/* Navigation Links */}
                        <List size="lg" component="nav" sx={{ flex: 'none', fontSize: 'xxl', color: "#232323", fontWeight: "600" }}>
                            {nav.map((item, index) => (
                                <Link to={item.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
                                    <ListItemButton 
                                        sx={{ width: "100%", borderBottom: "1px solid #e0e0e0", padding: "13px 0", marginBottom: "-1px" }}
                                    >
                                        {item.name}
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Container>
        </div>
    );
}

export default SideNav;
