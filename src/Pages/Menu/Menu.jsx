import React from "react";
import Slider from "react-slick";
import BreadcrumbSection from "../../Components/ParentHero";
import { Box, Container, TextField, Grid, Button, Typography } from "@mui/material";
import { LuShoppingCart } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../Components/Footer";

const Menu = () => {

  // Define breadcrumb links
  const breadcrumbLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Food Menu",
      href: "/menu",

    },
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "The best food ever",
      text: "Breaking consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.",
      name: "Anthom Bu Spar",
      position: "Marketing Manager",
    },
    {
      id: 2,
      rating: 5,
      title: "Awesome and delicious food",
      text: "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.",
      name: "Matthew J. Wyman",
      position: "Senior Consultant",
    },
  ];


  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
    
  };

  const meals = [
    {
      name: "Pasta Primavera",
      image: "https://validthemes.net/site-template/restan/assets/img/food/5.jpg",
      ingredients: "Penne / Fresh Vegetables / Parmesan",
      extra: "Served with Garlic Bread.",
      prices: ["$22", "$32"],
    },
    {
      name: "Grilled Paneer Steak",
      image: "https://validthemes.net/site-template/restan/assets/img/food/6.jpg",
      ingredients: "Paneer / Bell Peppers / Herbs",
      extra: "Served with Mint Chutney.",
      prices: ["$25", "$35"],
    },
    {
      name: "Mushroom Risotto",
      image: "https://validthemes.net/site-template/restan/assets/img/food/7.jpg",
      ingredients: "Arborio Rice / Mushrooms / Parmesan",
      extra: "Comes with a Side of Garlic Bread.",
      prices: ["$20", "$30"],
    },
    {
      name: "Vegetable Stir Fry",
      image: "https://validthemes.net/site-template/restan/assets/img/food/8.jpg",
      ingredients: "Broccoli / Carrots / Bell Peppers",
      extra: "Includes a Side of Steamed Rice.",
      prices: ["$18", "$28"],
    },
    {
      name: "Margherita Pizza",
      image: "https://validthemes.net/site-template/restan/assets/img/food/9.jpg",
      ingredients: "Tomatoes / Basil / Mozzarella",
      extra: "Extra Cheese on Request.",
      prices: ["$15", "$25"],
    },
  ];

  const meals1 = [
    {
      name: "Vegetable Biryani",
      image: "https://validthemes.net/site-template/restan/assets/img/food/1.jpg",
      ingredients: "Basmati Rice / Mixed Vegetables / Spices",
      extra: "Served with Raita.",
      prices: ["$18", "$28"],
    },
    {
      name: "Butter Paneer",
      image: "https://validthemes.net/site-template/restan/assets/img/food/2.jpg",
      ingredients: "Paneer / Tomato Gravy / Butter / Cream",
      extra: "Served with Naan or Rice.",
      prices: ["$22", "$32"],
    },
    {
      name: "Lentil Soup",
      image: "https://validthemes.net/site-template/restan/assets/img/food/3.jpg",
      ingredients: "Lentils / Carrots / Tomatoes / Garlic",
      extra: "Served with Whole Wheat Bread.",
      prices: ["$12", "$22"],
    },
    {
      name: "Vegetable Tacos",
      image: "https://validthemes.net/site-template/restan/assets/img/food/4.jpg",
      ingredients: "Corn Tortilla / Mixed Vegetables / Salsa / Avocado",
      extra: "Garnished with Cilantro.",
      prices: ["$16", "$26"],
    },
    {
      name: "Caprese Salad",
      image: "https://validthemes.net/site-template/restan/assets/img/food/5.jpg",
      ingredients: "Tomatoes / Fresh Mozzarella / Basil / Olive Oil",
      extra: "Balsamic Glaze on Request.",
      prices: ["$14", "$24"],
    },
  ];

  const seafood = [
    {
      name: "Salmon Fry",
      image: "https://validthemes.net/site-template/restan/assets/img/food/9.jpg",
      ingredients: "Ricotta / goat cheese / beetroot",
      extra: "Extra Free Juice.",
      prices: ["$40", "$70"],
    },
    {
      name: "Pangasius or Basa",
      image: "https://validthemes.net/site-template/restan/assets/img/food/10.jpg",
      ingredients: "Atlantic / chips / salad /tartare",
      extra: "Extra Free Juice.",
      prices: ["$15", "$55"],
    },
    {
      name: "Clams",
      image: "https://validthemes.net/site-template/restan/assets/img/food/7.jpg",
      ingredients: "Truffle mash / pepper sauce.",
      extra: "Extra Free Juice.",
      prices: ["$45", "$78"],
    },
    {
      name: "Red Crab",
      image: "https://validthemes.net/site-template/restan/assets/img/food/12.jpg",
      ingredients: "Ricotta / goat cheese / beetroot",
      extra: "Extra Free Juice.",
      prices: ["$20", "$30"],
    },
  ]
  const Beverage = [
    {
      name: "Wine",
      image: "https://validthemes.net/site-template/restan/assets/img/food/13.jpg",
      ingredients: "Ricotta / goat cheese / beetroot",
      extra: "Extra Free Juice.",
      prices: ["$34", "$66"],
    },
    {
      name: "Coffee",
      image: "https://validthemes.net/site-template/restan/assets/img/food/14.jpg",
      ingredients: "Atlantic / chips / salad /tartare",
      extra: "Extra Free Juice.",
      prices: ["$36", "$55"],
    },
    {
      name: "Hot chocolate",
      image: "https://validthemes.net/site-template/restan/assets/img/food/15.jpg",
      ingredients: "Truffle mash / pepper sauce.",
      extra: "Extra Free Juice.",
      prices: ["$67", "$88"],
    },
    {
      name: "Milk Shake",
      image: "	https://validthemes.net/site-template/restan/assets/img/food/16.jpg",
      ingredients: "Ricotta / goat cheese / beetroot",
      extra: "Extra Free Juice.",
      prices: ["$14", "$56"],
    },
  ]

  return (
    <div>
      {/* Breadcrumb Section */}
      <BreadcrumbSection title="Food Menu" breadcrumbLinks={breadcrumbLinks} />
      <Box className='food-menus-area' sx={{ paddingTop: "120px", paddingBottom: "120px", }}>
        <Box className='container'>
          <Box className="food-menus-item" sx={{ marginTop: 0, overflow: "hidden", }}>
            <Box className="row">
              {/* Left Image Section */}
              <Box className="col-lg-5 thumb"
                sx={{
                  backgroundImage: `url("https://validthemes.net/site-template/restan/assets/img/banner/10.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  height: "100vh",
                }}>
                {/* Discount Badge */}
                <Box className="discount-badge"
                  sx={{
                    position: "absolute",
                    right: "-98px",
                    top: "80px",
                    height: "200px",
                    width: "200px",
                    background: "#826a45",
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "24px",
                    fontFamily: "ui-monospace",
                    lineHeight: "1.2",
                    justifyContent: "center",
                    clipPath:
                      "polygon(45% 1.34%, 46.58% 0.6%, 48.26% 0.15%, 50% 0%, 51.74% 0.15%, 53.42% 0.6%, 55% 1.34%, 89.64% 21.34%, 91.07% 22.34%, 92.3% 23.57%, 93.3% 25%, 94.04% 26.58%, 94.49% 28.26%, 94.64% 30%, 94.64% 70%, 94.49% 71.74%, 94.04% 73.42%, 93.3% 75%, 92.3% 76.43%, 91.07% 77.66%, 89.64% 78.66%, 55% 98.66%, 53.42% 99.4%, 51.74% 99.85%, 50% 100%, 48.26% 99.85%, 46.58% 99.4%, 45% 98.66%, 10.36% 78.66%, 8.93% 77.66%, 7.7% 76.43%, 6.7% 75%, 5.96% 73.42%, 5.51% 71.74%, 5.36% 70%, 5.36% 30%, 5.51% 28.26%, 5.96% 26.58%, 6.7% 25%, 7.7% 23.57%, 8.93% 22.34%, 10.36% 21.34%)",
                  }}
                >
                  <strong style={{ display: "block", fontSize: "40px", fontWeight: "900", color: "#ff9e07", }}>
                    Menu
                  </strong>
                  Breakfast
                </Box>
              </Box>

              {/* Right Content Section */}
              <Box className="col-lg-7"   >
                <Box className="info" sx={{ padding: "65px 50px", paddingRight: "0", paddingLeft: "130px", }}>
                  {/* Meal Type Selection */}
                  <ul className="meal-type" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginBottom: "15px", }} >
                    <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                      Half
                    </li>
                    <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                      Full
                    </li>
                  </ul>

                  {/* Meal Items */}
                  <ul className="meal-items" style={{ display: "grid", gap: "30px" }}>
                    {meals.map((meal, index) => (
                      <li key={index} style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 5.5fr", gap: "30px", alignItems: "center" }}>
                        {/* Thumbnail Image */}
                        <Box className="thumbnail">
                          <img src={meal.image} alt={meal.name} style={{ borderRadius: "50%", marginRight: "30px" }} />
                        </Box>

                        {/* Content Section */}
                        <Box className="content">
                          <Box className="top"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              position: "relative",
                              zIndex: 1,
                              marginBottom: "10px",
                              "&::before": {
                                position: "absolute",
                                left: "170px",
                                top: "14px",
                                content: '""',
                                height: "1px",
                                width: "100%",
                                borderTop: "1px solid",
                                zIndex: -1,
                                opacity: 0.6,
                              },
                              "&::after": {
                                position: "absolute",
                                left: "170px",
                                top: "19px",
                                content: '""',
                                height: "1px",
                                width: "100%",
                                borderTop: "1px solid",
                                zIndex: -1,
                                opacity: 0.6,
                              },
                            }}
                          >
                            {/* Meal Title */}
                            <Box className="title" sx={{ marginTop: "0", fontWeight: "600", fontSize: "50px" }}>
                              <h4 style={{ margin: "0", paddingRight: "20px", background: "white" }}>
                                <a href="/" style={{ color: "black", textDecoration: "none" }}>
                                  {meal.name}
                                </a>
                              </h4>
                            </Box>

                            {/* Price Section */}
                            <Box className="price" sx={{ fontSize: "24px", fontWeight: "900", background: "white", display: "flex", alignItems: "center", marginBottom: "0", }}>
                              {meal.prices.map((price, i) => (
                                <span key={i} style={{ marginLeft: "20px", lineHeight: "1.2" }}>
                                  {price}
                                </span>
                              ))}
                            </Box>
                          </Box>

                          {/* Description Section */}
                          <Box className="bottom" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box className="left">
                              <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                                {meal.ingredients}
                              </p>
                            </Box>
                            <Box className="right">
                              <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                                {meal.extra}
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="food-menus-item order" sx={{ marginTop: "120px", overflow: "hidden", }}>
            <Box className="row" >
              {/* Left Image Section */}
              <Box className="col-lg-5 thumb"
                sx={{
                  backgroundImage: `url("https://validthemes.net/site-template/restan/assets/img/banner/11.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  height: "100vh",
                  order: "6!important"
                }}>
                {/* Discount Badge */}
                <Box className="discount-badge"
                  sx={{
                    position: "absolute",
                    right: "auto",
                    left: "-98px",
                    top: "80px",
                    height: "200px",
                    width: "200px",
                    background: "#826a45",
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "24px",
                    fontFamily: "ui-monospace",
                    lineHeight: "1.2",
                    justifyContent: "center",
                    clipPath:
                      "polygon(45% 1.34%, 46.58% 0.6%, 48.26% 0.15%, 50% 0%, 51.74% 0.15%, 53.42% 0.6%, 55% 1.34%, 89.64% 21.34%, 91.07% 22.34%, 92.3% 23.57%, 93.3% 25%, 94.04% 26.58%, 94.49% 28.26%, 94.64% 30%, 94.64% 70%, 94.49% 71.74%, 94.04% 73.42%, 93.3% 75%, 92.3% 76.43%, 91.07% 77.66%, 89.64% 78.66%, 55% 98.66%, 53.42% 99.4%, 51.74% 99.85%, 50% 100%, 48.26% 99.85%, 46.58% 99.4%, 45% 98.66%, 10.36% 78.66%, 8.93% 77.66%, 7.7% 76.43%, 6.7% 75%, 5.96% 73.42%, 5.51% 71.74%, 5.36% 70%, 5.36% 30%, 5.51% 28.26%, 5.96% 26.58%, 6.7% 25%, 7.7% 23.57%, 8.93% 22.34%, 10.36% 21.34%)",
                  }}
                >
                  <strong style={{ display: "block", fontSize: "40px", fontWeight: "900", color: "#ff9e07", }}>
                    Menu
                  </strong>
                  Breakfast
                </Box>
              </Box>
              {/* Right Content Section */}
              <Box className="col-lg-7" sx={{ flex: 1 }}>
                <Box className="info" sx={{ padding: "65px 50px", paddingRight: "140px", paddingLeft: "0", }}>
                  {/* Meal Type Selection */}
                  <ul className="meal-type" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginBottom: "15px", }} >
                    <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                      Half
                    </li>
                    <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                      Full
                    </li>
                  </ul>

                  {/* Meal Items */}
                  <ul className="meal-items" style={{ display: "grid", gap: "30px" }}>
                    {meals1.map((meals1, index) => (
                      <li key={index} style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 5.5fr", gap: "30px", alignItems: "center" }}>
                        {/* Thumbnail Image */}
                        <Box className="thumbnail">
                          <img src={meals1.image} alt={meals1.name} style={{ borderRadius: "50%", marginRight: "30px" }} />
                        </Box>

                        {/* Content Section */}
                        <Box className="content">
                          <Box className="top"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              position: "relative",
                              zIndex: 1,
                              marginBottom: "10px",
                              "&::before": {
                                position: "absolute",
                                left: "0px",
                                top: "14px",
                                content: '""',
                                height: "1px",
                                width: "100%",
                                borderTop: "1px solid",
                                zIndex: -1,
                                opacity: 0.6,
                              },
                              "&::after": {
                                position: "absolute",
                                left: "0px",
                                top: "19px",
                                content: '""',
                                height: "1px",
                                width: "100%",
                                borderTop: "1px solid",
                                zIndex: -1,
                                opacity: 0.6,
                              },
                            }}
                          >
                            {/* Meal Title */}
                            <Box className="title" sx={{ marginTop: "0", fontWeight: "600", fontSize: "50px" }}>
                              <h4 style={{ margin: "0", paddingRight: "20px", background: "white" }}>
                                <a href="/" style={{ color: "black", textDecoration: "none" }}>
                                  {meals1.name}
                                </a>
                              </h4>
                            </Box>

                            {/* Price Section */}
                            <Box className="price" sx={{ fontSize: "24px", fontWeight: "900", background: "white", display: "flex", alignItems: "center", marginBottom: "0", }}>
                              {meals1.prices.map((price, i) => (
                                <span key={i} style={{ marginLeft: "20px", lineHeight: "1.2" }}>
                                  {price}
                                </span>
                              ))}
                            </Box>
                          </Box>

                          {/* Description Section */}
                          <Box className="bottom" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box className="left">
                              <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                                {meals1.ingredients}
                              </p>
                            </Box>
                            <Box className="right">
                              <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                                {meals1.extra}
                              </p>
                            </Box>
                          </Box>
                        </Box>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="deliverya-process-area shadowdark"
        sx={{
          backgroundImage: `url("https://validthemes.net/site-template/restan/assets/img/banner/9.jpg")`,
          position: "relative",
          zIndex: "1",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}>
        <Box className="food-menus-area-shape" sx={{ position: "absolute", right: "5%", textAlign: "right", zIndex: '1', width: "30%", bottom: "-50px" }}>
          <img src="https://validthemes.net/site-template/restan/assets/img/illustration/11.png" alt="" style={{ height: "550px", width: "auto", maxWidth: "inherit" }} />
        </Box>
        <Box className='container'>
          <Box className="row">
            <Box className="col-xl-5 col-lg-8">
              <Box className="delivary-projcess">
                <h2 style={{ color: "white", fontSize: "70px", marginBottom: "30px", fontWeight: "800", textTransform: "uppercase", fontFamily: "ui-monospace" }}>30 Minutes Delivery!</h2>
                <p style={{ color: "rgb(204, 204, 204)", textTransform: "none", fontWeight: "500", fontFamily: "sans-serif", margin: "0px 0px 45px" }}>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                </p>
                <a href="" style={{ color: "white", borderWidth: "initial", borderStyle: "none", borderColor: "initial", borderImage: "initial", background: "#826a45", fontSize: "16px", padding: '16px 35px', textDecoration: "none", marginTop: "10px", alignItems: "center" }}>
                  <LuShoppingCart style={{ fontWeight: "1", fontSize: "24px", margin: "0", marginRight: "10px", top: "1px" }} />
                  Order Now
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="food-type-area" sx={{ paddingTop: "120px", paddingBottom: "120px", position: "relative" }}>
        <Box className='container'>
          <Box className="row">
            <Box className="col-lg-6" sx={{ paddingRight: "50px" }}>
              <Box className="info">
                <Box className="heading" sx={{ fontWeight: "600", marginBottom: "25px", marginTop: "-5px", fontSize: "42px", lineHeight: "1.3", textAlign: "center" }}>
                  <h4 className="sub-title">
                    Fresh from ocean
                  </h4>
                  <h2 className="title" style={{ color: "black", lineHeight: "1.2", fontFamily: "ui-monospace", letterSpacing: "0", margin: "0", marginBottom: "15px" }}>
                    Sea Food
                  </h2>
                </Box>
                {/* Meal Type Selection */}
                <ul className="meal-type" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginBottom: "15px", }} >
                  <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                    Half
                  </li>
                  <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                    Full
                  </li>
                </ul>
                <ul className="meal-items" style={{ display: "grid", gap: "30px" }}>
                  {seafood.map((seafood, index) => (
                    <li key={index} style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 5.5fr", gap: "30px", alignItems: "center" }}>
                      {/* Thumbnail Image */}
                      <Box className="thumbnail">
                        <img src={seafood.image} alt={seafood.name} style={{ borderRadius: "50%", marginRight: "30px" }} />
                      </Box>

                      {/* Content Section */}
                      <Box className="content">
                        <Box className="top"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                            zIndex: 1,
                            marginBottom: "10px",
                            "&::before": {
                              position: "absolute",
                              left: "0px",
                              top: "14px",
                              content: '""',
                              height: "1px",
                              width: "100%",
                              borderTop: "1px solid",
                              zIndex: -1,
                              opacity: 0.6,
                            },
                            "&::after": {
                              position: "absolute",
                              left: "0px",
                              top: "19px",
                              content: '""',
                              height: "1px",
                              width: "100%",
                              borderTop: "1px solid",
                              zIndex: -1,
                              opacity: 0.6,
                            },
                          }}
                        >
                          {/* Meal Title */}
                          <Box className="title" sx={{ marginTop: "0", fontWeight: "600", fontSize: "50px" }}>
                            <h4 style={{ margin: "0", paddingRight: "20px", background: "white" }}>
                              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                                {seafood.name}
                              </a>
                            </h4>
                          </Box>

                          {/* Price Section */}
                          <Box className="price" sx={{ fontSize: "24px", fontWeight: "900", background: "white", display: "flex", alignItems: "center", marginBottom: "0", }}>
                            {seafood.prices.map((price, i) => (
                              <span key={i} style={{ marginLeft: "20px", lineHeight: "1.2" }}>
                                {price}
                              </span>
                            ))}
                          </Box>
                        </Box>

                        {/* Description Section */}
                        <Box className="bottom" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Box className="left">
                            <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                              {seafood.ingredients}
                            </p>
                          </Box>
                          <Box className="right">
                            <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                              {seafood.extra}
                            </p>
                          </Box>
                        </Box>
                      </Box>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
            <Box className="col-lg-6" sx={{ paddingRight: "50px" }}>
              <Box className="info">
                <Box className="heading" sx={{ fontWeight: "600", marginBottom: "25px", marginTop: "-5px", fontSize: "42px", lineHeight: "1.3", textAlign: "center" }}>
                  <h4 className="sub-title">
                    Drins & Wine
                  </h4>
                  <h2 className="title" style={{ color: "black", lineHeight: "1.2", fontFamily: "ui-monospace", letterSpacing: "0", margin: "0", marginBottom: "15px" }}>
                    Beverage
                  </h2>
                </Box>
                {/* Meal Type Selection */}
                <ul className="meal-type" style={{ display: "flex", alignItems: "center", justifyContent: "right", marginBottom: "15px", }} >
                  <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                    Half
                  </li>
                  <li style={{ display: "inline-block", border: "1px solid", marginLeft: "10px", padding: "3px 10px", fontWeight: "600", }}>
                    Full
                  </li>
                </ul>
                <ul className="meal-items" style={{ display: "grid", gap: "30px" }}>
                  {Beverage.map((Beverage, index) => (
                    <li key={index} style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 5.5fr", gap: "30px", alignItems: "center" }}>
                      {/* Thumbnail Image */}
                      <Box className="thumbnail">
                        <img src={Beverage.image} alt={Beverage.name} style={{ borderRadius: "50%", marginRight: "30px" }} />
                      </Box>

                      {/* Content Section */}
                      <Box className="content">
                        <Box className="top"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            position: "relative",
                            zIndex: 1,
                            marginBottom: "10px",
                            "&::before": {
                              position: "absolute",
                              left: "0px",
                              top: "14px",
                              content: '""',
                              height: "1px",
                              width: "100%",
                              borderTop: "1px solid",
                              zIndex: -1,
                              opacity: 0.6,
                            },
                            "&::after": {
                              position: "absolute",
                              left: "0px",
                              top: "19px",
                              content: '""',
                              height: "1px",
                              width: "100%",
                              borderTop: "1px solid",
                              zIndex: -1,
                              opacity: 0.6,
                            },
                          }}
                        >
                          {/* Meal Title */}
                          <Box className="title" sx={{ marginTop: "0", fontWeight: "600", fontSize: "50px" }}>
                            <h4 style={{ margin: "0", paddingRight: "20px", background: "white" }}>
                              <a href="/" style={{ color: "black", textDecoration: "none" }}>
                                {Beverage.name}
                              </a>
                            </h4>
                          </Box>

                          {/* Price Section */}
                          <Box className="price" sx={{ fontSize: "24px", fontWeight: "900", background: "white", display: "flex", alignItems: "center", marginBottom: "0", }}>
                            {Beverage.prices.map((price, i) => (
                              <span key={i} style={{ marginLeft: "20px", lineHeight: "1.2" }}>
                                {price}
                              </span>
                            ))}
                          </Box>
                        </Box>

                        {/* Description Section */}
                        <Box className="bottom" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Box className="left">
                            <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                              {Beverage.ingredients}
                            </p>
                          </Box>
                          <Box className="right">
                            <p style={{ color: "#666666", margin: "0", textTransform: "capitalize" }}>
                              {Beverage.extra}
                            </p>
                          </Box>
                        </Box>
                      </Box>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="testimonial-area" sx={{ paddingTop: "120px", paddingBottom: "120px", position: "relative", background: "#ebe9e6" }}>
        <Box className="testimonial-shape">
          <img src="https://validthemes.net/site-template/restan/assets/img/shape/5.png" alt="" style={{ left: "5%", width: "10%", position: "absolute", top: "120px", opacity: "0.1" }} />
          <img src="https://validthemes.net/site-template/restan/assets/img/shape/7.png" alt="" style={{ right: "5%", bottom: "50px", top: "auto", width: "10%", position: "absolute", opacity: "0.1" }} />
        </Box>
        <Box className='container'>
          <Box className="site-heading" sx={{ marginBottom: "60xp", textAlign: "center" }}>
            <h4 className="sub-title">
              Happy Customers
            </h4>
            <h2 className="title" style={{ marginBottom: "0" }}>
              Our Customers Feedback
            </h2>
          </Box>
          <Box className="row" sx={{ alignItems: "center" }}>
            <Box className="col-lg-5">
              <Box className="testimonial-thumb" sx={{ position: "relative" }}>
                <img src="https://validthemes.net/site-template/restan/assets/img/team/4.jpg" alt=""
                  style={{
                    height: "auto",
                    clipPath: "polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)"
                  }}
                />
                <img src="https://validthemes.net/site-template/restan/assets/img/team/5.jpg" alt=""
                  style={{
                    position: "absolute",
                    right: "5%",
                    top: "10%",
                    border: "2px solid white",
                    borderRadius: "50%",
                    height: "100px",
                    boxShadow: "0px 2px 60px 0px rgba(0, 0, 0, 0.6)"
                  }}
                />
                <img src="https://validthemes.net/site-template/restan/assets/img/team/6.jpg" alt=""
                  style={{
                    position: "absolute",
                    right: "-50px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "5px solid white",
                    height: "130px",
                    borderRadius: "50%",
                    boxShadow: "0px 2px 60px 0px rgba(0, 0, 0, 0.6)"
                  }}
                />
                <img src="https://validthemes.net/site-template/restan/assets/img/team/7.jpg" alt=""
                  style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "10%",
                    border: "2px solid white",
                    borderRadius: "50%",
                    height: "100px",
                    boxShadow: "0px 2px 60px 0px rgba(0, 0, 0, 0.6)"
                  }}
                />
              </Box>
            </Box>
            <Box className="col-lg-6 offset-lg-1 slide-text" sx={{ marginLeft: "7.33333333%" }}>
              <div className="slider-container">
                <Slider {...settings}>
                  {testimonials.map((testimonial) => (
                    <Box key={testimonial.id} className="testimonial-style-one" sx={{ overflow: "hidden" }}>
                      <Box className="item">
                        <Box className="content" sx={{ listStyle: "none" }}>
                          {/* Rating Section */}
                          <Box className="rating" sx={{ display: "flex", alignItems: "center", marginBottom: "10px", fontWeight: "700", justifyContent: "left" }}>
                            <Box className="icone" sx={{ fontSize: "12px", color: "#999999", lineHeight: "1" }}>
                              {[...Array(testimonial.rating)].map((_, index) => (
                                <FaStar key={index} style={{ color: "#f7a105", fontWeight: "900" }} />
                              ))}
                            </Box>
                            <span style={{ fontSize: "20px", marginLeft: "20px" }}>({testimonial.rating}/5)</span>
                          </Box>

                          {/* Testimonial Title & Content */}
                          <h2 style={{ fontWeight: "700", marginBottom: "25px", fontSize: "40px", fontFamily: "ui-monospace" }}>{testimonial.title}</h2>
                          <p style={{ fontSize: "25px", color: "#666666", fontFamily: "sans-serif", margin: "0 0 25px", fontWeight: "500" }}>
                            {testimonial.text}
                          </p>
                        </Box>

                        {/* Provider Info */}
                        <Box className="provider" sx={{ borderTop: "2px solid", paddingTop: "30px" }}>
                          <Box className="info">
                            <h4 style={{ marginBottom: "10px" }}>{testimonial.name}</h4>
                            <span style={{ textTransform: "uppercase", fontWeight: "600", color: "#826a45" }}>{testimonial.position}</span>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Slider>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="reservation-area shadowdark"
        sx={{
          backgroundImage: 'url("https://validthemes.net/site-template/restan/assets/img/banner/2.jpg")',
          paddingTop: "110px",
          backgroundPosition: "center center !important",
          backgroundSize: "cover !important",
          marginBottom: "120px",
          "&::before": {
            position: "absolute",
            left: "0px",
            bottom: "0px",
            content: '""',
            height: "120px",
            width: "100%",
            background: "white"
          },
        }}
      >
        <Box className='container'>
          <Box className="row">
            <Box className="col-lg-6">
              <Box className="reservation-info" sx={{ color: "white" }}>
                <h4 className="sub-title" style={{ color: "white", fontWeight: "600" }}>Reservation</h4>
                <h2 className="title">Reservation Your Favorite Private Table</h2>
                <p style={{ color: "white", margin: "0 0 25px", fontWeight: "500", fontFamily: "sans-serif" }}>
                  A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.
                </p>
                <Box className="reservation-time">
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", marginTop: "30px" }}>
                    <li style={{ display: "inline-block", marginRight: "30px", borderRight: "1px solid rgba(255, 255, 255, 0.5)", paddingRight: "30px" }}>
                      <h4 style={{ marginBottom: "5px", color: "white", fontFamily: "ui-monospace" }}>Launch Menu</h4>
                      <p style={{ margin: "0", fontWeight: "500", fontFamily: "sans-serif" }}>
                        30+ items
                      </p>
                    </li>
                    <li style={{ display: "inline-block" }}>
                      <h4 style={{ marginBottom: "5px", color: "white", fontFamily: "ui-monospace" }}>Dinner Menu</h4>
                      <p style={{ margin: "0", fontWeight: "500", fontFamily: "sans-serif" }}>
                        50+ items
                      </p>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-5 offset-lg-1">
              <Grid item xs={12} md={5}>
                <Box className="reservation-form shadowdark::after"
                  sx={{
                    padding: '70px 60px',
                    position: 'relative',
                    zIndex: "1",
                  }}
                >
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="body1" color="#cccccc">Phone</Typography>
                        <TextField
                          fullWidth
                          id="phone"
                          name="phone"
                          placeholder="+4733378901"
                          variant="outlined"
                          size="small"
                          margin="normal"
                          sx={{
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "7px",
                            input: { color: "#cccccc" },
                            background:"transparent"

                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" color="#cccccc">Persons</Typography>
                        <TextField
                          select
                          fullWidth
                          id="persons"
                          name="persons"
                          variant="outlined"
                          size="small"
                          margin="normal"
                          SelectProps={{
                            native: true,
                          }}
                          sx={{
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "7px",
                            select : {color: "#cccccc"},
                            background:"transparent"

                          }}
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="5">5 Persons</option>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" color="#cccccc">Date</Typography>
                        <TextField
                          type="date"
                          fullWidth
                          id="date"
                          name="date"
                          placeholder="Date"
                          variant="outlined"
                          size="small"
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,

                          }}
                          sx={{
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "7px",
                            input : {color: "#cccccc"},
                            background:"transparent"

                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body1" color="#cccccc">Time Slot</Typography>
                        <TextField
                          select
                          fullWidth
                          id="timeslot"
                          name="timeslot"
                          variant="outlined"
                          size="small"
                          margin="normal"
                          SelectProps={{
                            native: true,
                          }}
                          sx={{
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "7px",
                              select : {color: "#cccccc"},
                            background:"transparent"

                          }}
                        >
                          <option value="1">10:00 AM</option>
                          <option value="2">11:00 AM</option>
                          <option value="3">12:00 PM</option>
                          <option value="4">1:00 PM</option>
                          <option value="5">2:00 PM</option>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            marginTop: "15px",
                            fontWeight: "600",
                            textTransform: "capitalize",
                            borderRadius: "7px",
                            fontSize: "16px",
                            padding: "14px 40px",
                            backgroundColor: "#826a45",
                            color: "white",
                          }}
                        >
                          Book A Table
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};


export default Menu;
