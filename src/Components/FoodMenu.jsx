import React, { useState } from 'react';
import { Box, colors } from '@mui/material';
import { Button, Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { ShoppingCartOutlined } from '@mui/icons-material';

const FoodMenu = () => {
    const [activeTab, setActiveTab] = useState("Main Dishes");
    const menuItems = {
        "Main Dishes": [
            {
                name: "Mushroom Delight Burger",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/6.jpg",
                rating: "4.9 (5.7K)",
                price: { original: "$35.00", discounted: "$34.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {

                name: "Seared Scallops with Butter",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/5.jpg",
                rating: " 4.6(5.7K) ",
                price: { original: "$19.00", discounted: "$24.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {

                name: "Broken Lasagna & Parmesan",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/4.jpg",
                rating: "5.0 (7.1K)",
                price: { original: "$22.00", discounted: "$38.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Braised Chicken Legs",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/1.jpg",
                rating: "4.9(5.7K)",
                price: { original: "$34.00", discounted: "$35.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Bone Steak",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/2.jpg",
                rating: "4.2(3.1K)",
                price: { original: "$25.00", discounted: "$18.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Fish Tacos with Chipotle Crema",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/3.jpg",
                rating: "4.8(6.7K)",
                price: { original: "$12.00", discounted: "$18.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },

        ],
        "Desserts": [
            {
                name: "Vanilla Cupcakes",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/7.jpg",
                rating: "5.0 (7.1K)",
                price: { original: "$34.00", discounted: "$35.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Chocolate brownie",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/8.jpg",
                rating: "4.2(3.1K)",
                price: { original: "$25.00", discounted: "$18.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Croissants Sweet Rolls Muffin",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/9.jpg",
                rating: "4.8(6.7K)",
                price: { original: "$18.00", discounted: "$12.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "White Chocolate Cheesecake",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/10.jpg",
                rating: " 5.0(3.5K)",
                price: { original: "$38.00", discounted: "$22.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Lemon Meringue Pie",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/11.jpg",
                rating: "4.6(5.7K)",
                price: { original: "$24.00", discounted: "$19.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Mixed Berry Mousse",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/12.jpg",
                rating: "4.8(5.5K)",
                price: { original: "$40.00", discounted: "$36.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
        ],
        "Sea Food": [
            {
                name: "Salmon Fry",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/13.jpg",
                rating: " 4.9(5.7K)",
                price: { original: "$35.00", discounted: "$34.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Pangasius or Basa",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/14.jpg",
                rating: "4.2(3.1K)",
                price: { original: "$25.00", discounted: "$18.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Spicy Stuffed Clams",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/15.jpg",
                rating: " 4.8(6.7K)",
                price: { original: "$18.00", discounted: "$12.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Special Cajun Red Crab",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/16.jpg",
                rating: "5.0(3.5K)",
                price: { original: "$38.00", discounted: "$22.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Crustaceans such as lobsters",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/17.jpg",
                rating: "4.6(5.7K)",
                price: { original: "$24.00", discounted: "$19.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "The cephalopod mollusks",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/18.jpg",
                rating: " 4.8(5.5K)",
                price: { original: "$40.00", discounted: "$36.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            }
        ],
        "Beverage": [
            {
                name: "Cabernet Sauvignon",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/19.jpg",
                rating: " 4.9(5.7K)",
                price: { original: "$35.00", discounted: "$34.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Americano Cofee",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/20.jpg",
                rating: "4.2(3.1K)",
                price: { original: "$25.00", discounted: "$18.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Hot chocolate Shake",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/21.jpg",
                rating: "4.8(6.7K)",
                price: { original: "$18.00", discounted: "$12.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Watermelon Juice",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/22.jpg",
                rating: " 4.8(6.7K)",
                price: { original: "$18.00", discounted: "$12.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },

            {
                name: "Crustaceans such as lobsters",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/17.jpg",
                rating: " 5.0(3.5K)",
                price: { original: "$38.00", discounted: "$22.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            },
            {
                name: "Soft Drinks",
                image: "https://validthemes.net/site-template/restan/assets/img/menu/24.jpg",
                rating: "  4.8(5.5K)",
                price: { original: "$40.00", discounted: "$36.00" },
                ingredients: ["Chili sauce", "Soft Drinks"],
                decription: "4 chicken legs"
            }
        ],
    }

    return (
        <Box sx={{ paddingTop: "120px" }}>
            <Container>
                <Box className="row" sx={{ display: "flex", justifyContent: "center" }}>
                    <Box className="col-lg-8">
                        <Box className="site-heading text-center" marginBottom={"60px"}>
                            <h4 className="sub-title">Food Menu</h4>
                            <h2 className="title" style={{ fontFamily: "ui-monospace" }}>Our Specials Menu</h2>
                        </Box>
                    </Box>
                </Box>

                <Box className="food-menu-three-two-items">
                    <Box className="row" sx={{ display: "flex", justifyContent: "center" }}>
                        <Box className="col-lg-12 " sx={{ textAlign: "center!important" }}>
                            <Box className="Food-button" sx={{
                                border: "1px solid",
                                borderColor: "inherit",
                                borderRadius: "5px",
                                padding: "10px",
                                display: "inline-block",
                                textAlign: "center",
                                marginBottom: "50px",
                            }}>
                                {Object.keys(menuItems).map((category) => (
                                    <Button
                                        key={category}
                                        onClick={() => setActiveTab(category)}
                                        variant={activeTab === category ? "contained" : "outlined"}
                                        style={{
                                            margin: "5px",
                                            padding: "15px 30px",
                                            textTransform: "uppercase",
                                            fontSize: "17px",
                                            fontWeight: "600",
                                            backgroundColor: activeTab === category ? "#826a45" : "transparent",
                                            color: activeTab === category ? "white" : "black",
                                            transition: "color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out",
                                        }}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </Box>

                        </Box>
                        <Box className="col-lg-12 ">
                            <Box className="tab-content" sx={{ marginTop: "-30px" }}>
                                <Box className="tab-page">
                                    <Box className="row " sx={{ justifyContent: "center" }}>
                                        {menuItems[activeTab].map((item, index) => (
                                            <Box key={index} className="col-xl-4 col-lg-6 col-md-6 " marginTop={"30px"}>
                                                <Box className="food-menu-style-three"
                                                    sx={{
                                                        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                                                        transition: "all 0.3s ease-in-out",
                                                        "&:hover": { boxShadow: "0 0 30px rgba(0,0,0,0.5)" },
                                                    }}>
                                                    <Box className="thumb" position={"relative"}>
                                                        <img src={item.image} alt={item.name} />
                                                        <Box className="d-flex" sx={{ display: "flex", alignItems: "center" }}>
                                                            <Box className="food-review">
                                                                <FaStar color="#f7a105" />
                                                                <span>{item.rating}</span>
                                                            </Box>
                                                            <Box className="price">
                                                                <span style={{ display: "flex", alignItems: "center", lineHeight: "1" }}>
                                                                    <del style={{ textDecoration: "revert" }}>{item.price.original}</del>
                                                                    {item.price.discounted}
                                                                </span>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Box className="info">
                                                        <h4>
                                                            <a href="#" style={{ textDecoration: "none", color: "black", fontFamily: "ui-monospace" }}>
                                                                {item.name}
                                                            </a>
                                                        </h4>
                                                        <ul>
                                                            <span style={{ fontWeight: "600" }}>{item.decription}</span>
                                                            {item.ingredients.map((ingredient, idx) => (
                                                                <li key={idx}>{ingredient}</li>
                                                            ))}
                                                        </ul>
                                                        <a href="#" className="cart-btn-border" style={{ color: "black", textDecoration: "none" }}>
                                                            <ShoppingCartOutlined
                                                                sx={{
                                                                    marginRight: "5px",
                                                                    color: "black",
                                                                }}
                                                            />
                                                            Add to Cart
                                                        </a>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodMenu;
