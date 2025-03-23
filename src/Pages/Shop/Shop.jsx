import React, { useState, useCallback } from "react";
import { Box, Container, Menu, MenuItem, Button, Typography, Grid, Pagination } from "@mui/material";
import { FaArrowLeft, FaArrowRight, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import BreadcrumbSection from "../../Components/ParentHero";
import Footer from "../../Components/Footer";

const Shop = () => {
    const breadcrumbLinks = [
        { label: "Home", href: "/" },
        { label: "Shop", href: "#" },
    ];

    const dishes = [
        { name: "Margherita Pizza", price: "$12.00", tags: ["Cheese", "Pizza"], img: "https://validthemes.net/site-template/restan/assets/img/shop/1.png" },
        { name: "Veggie Burger", price: "$10.50", tags: ["Vegan", "Burger"], img: "https://validthemes.net/site-template/restan/assets/img/shop/2.png" },
        { name: "Grilled Zucchini", price: "$8.99", tags: ["Grilled", "Healthy"], img: "https://validthemes.net/site-template/restan/assets/img/shop/3.png" },
        { name: "Stuffed Peppers", price: "$11.25", tags: ["Vegetarian", "Spicy"], img: "https://validthemes.net/site-template/restan/assets/img/shop/4.png" },
        { name: "Mushroom Risotto", price: "$14.00", tags: ["Mushroom", "Italian"], img: "https://validthemes.net/site-template/restan/assets/img/shop/5.png" },
        { name: "Cauliflower Steak", price: "$9.50", tags: ["Vegan", "Steak"], img: "https://validthemes.net/site-template/restan/assets/img/shop/6.png" },
        { name: "Spinach Lasagna", price: "$13.75", tags: ["Lasagna", "Pasta"], img: "https://validthemes.net/site-template/restan/assets/img/shop/7.png" },
        { name: "Roasted Broccoli", price: "$7.99", tags: ["Broccoli", "Healthy"], img: "https://validthemes.net/site-template/restan/assets/img/shop/8.png" },
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState("Sort by Latest");

    const sortOptions = ["Sort by Latest", "Sort by Recent", "Sort by Popular", "Sort by Relevant"];

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleSortChange = useCallback((option) => {
        setSelectedSortOption(option);
        handleClose();
    }, []);

    return (
        <Box>
            {/* Breadcrumb Section */}
            <BreadcrumbSection title="Special Food" breadcrumbLinks={breadcrumbLinks} />

            {/* Shop Content */}
            <Box sx={{ pt: 12, pb: 12 }}>
                <Box className='container'>
                    <Box sx={{ mb: 6 }}>
                        <Grid className="Sorting-Button" container spacing={1} alignItems="center" justifyContent="end">
                            {/* Left Section - Showing Results Text */}
                            <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}>
                                <Typography variant="body1">Showing 1–10 of 47 results</Typography>
                            </Grid>

                            {/* Sorting Button */}
                            <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: { xs: "center", md: "end" } }}>
                                <Button
                                    onClick={handleClick}
                                    variant="outlined"
                                    sx={{
                                        color: "black",
                                        border: "1px solid #dfdfdf",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        px: 2,
                                        py: 1,
                                    }}
                                >
                                    {selectedSortOption}
                                    <FaCaretDown size={14} />
                                </Button>

                                {/* Sort Menu */}
                                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option} onClick={() => handleSortChange(option)}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Grid>
                        </Grid>

                    </Box>

                    {/* Product Grid */}
                    <Box sx={{ clear: "both", textAlign: "center", py: 4 }}>
                        <Grid container spacing={4} justifyContent="center">
                            {dishes.map((dish, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                    <Box
                                        sx={{
                                            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                                            borderRadius: "30px",
                                            background: "white",
                                            p: 3,
                                            textAlign: "center",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": { boxShadow: "0 0 30px rgba(0,0,0,0.2)" },
                                        }}
                                    >
                                        {/* Product Image */}
                                        <Box sx={{ position: "relative", textAlign: "center", mb: 2 }}>
                                            <img
                                                src={dish.img}
                                                alt={dish.name}
                                                style={{ width: "100%", height: "auto", borderRadius: "15px" }}
                                            />
                                        </Box>

                                        {/* Product Tags */}
                                        <Box sx={{ display: "flex", justifyContent: "center", gap: "5px" }}>
                                            {dish.tags.map((tag, i) => (
                                                <Typography key={i} component="span" sx={{ fontSize: "12px", fontWeight: 600, color: "#666" }}>
                                                    {tag}{i < dish.tags.length - 1 ? "," : ""}
                                                </Typography>
                                            ))}
                                        </Box>

                                        {/* Product Title */}
                                        <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                                            <a href="#" style={{ color: "black", textDecoration: "none" }}>{dish.name}</a>
                                        </Typography>

                                        {/* Product Price */}
                                        <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#826a45", mt: 1 }}>
                                            {dish.price}
                                        </Typography>

                                        {/* Rounded Add to Cart Button with Shopping Cart Icon */}
                                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    color: "#826a45",
                                                    border: "2px solid #826a45",
                                                    borderRadius: "50px",
                                                    textTransform: "uppercase",
                                                    fontSize: "13px",
                                                    padding: "10px 25px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "8px",
                                                    transition: "all 0.3s ease-in-out",
                                                    "&:hover": { background: "#826a45", color: "white" },
                                                }}
                                            >
                                                <FaShoppingCart size={14} />
                                                Add to Cart
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box className="navigation" sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Pagination
                            count={2}
                            variant="outlined"
                            shape="rounded"
                            siblingCount={0}
                            boundaryCount={1}
                            renderItem={(item) => (
                                <Box
                                    component="li"
                                    sx={{
                                        display: "inline-block",
                                        margin: "0 2px",
                                        listStyle: "none",
                                    }}
                                >
                                    <Box
                                        component="a"
                                        href=""
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            padding: "15px 20px",
                                            borderRadius: "50%",
                                            color: item.selected ? "white" : "black",
                                            fontWeight: "600",
                                            lineHeight: "19px",
                                            textDecoration: "none",
                                            backgroundColor: item.selected ? "#826a45" : "white",
                                            border: "1px solid #dee2e6",
                                            cursor: "pointer",
                                            "&:hover": {
                                                backgroundColor: item.selected ? "#826a45" : "#f5f5f5",
                                            },
                                        }}
                                    >
                                        {item.page === 0 && item.type === "previous" ? (
                                            <FaArrowLeft />
                                        ) : item.page === 2 && item.type === "next" ? (
                                            <FaArrowRight />
                                        ) : (
                                            item.page
                                        )}
                                    </Box>
                                </Box>
                            )}
                        />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Shop;
