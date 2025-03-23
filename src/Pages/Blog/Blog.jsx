import React from 'react';
import BreadcrumbSection from "../../Components/ParentHero";
import { Box, Button, Container, Typography, Pagination } from '@mui/material';
import { FaCalendarDays, FaRegCircleUser } from 'react-icons/fa6';
import Footer from '../../Components/Footer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const breadcrumbLinks = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Blog",
            href: null, 
        },
    ];

    return (
        <div>
            {/* Breadcrumb Section */}
            <BreadcrumbSection
                title="Blog Standard"
                breadcrumbLinks={breadcrumbLinks}
            />

            {/* Blog Content */}
            <Box className="blog-area" sx={{ paddingTop: "120px", paddingBottom: "120px" }}>
                <Box className='container'>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box className="blog-item-box">
                            <Box className="item" sx={{ borderRadius: 2, boxShadow: "inherit", mb: 5, overflow: "hidden", background: "#f3f3f3", }}>
                                {/* Image Section */}
                                <Box className="thumb" sx={{ background: "#f3f3f3", m: 0, overflow: "hidden", borderRadius: "8px 8px 0 0", }}>
                                    <img src="https://validthemes.net/site-template/restan/assets/img/blog/v1.jpg" alt="Blog" style={{ width: "100%", borderRadius: "inherit" }} />
                                </Box>

                                {/* Content Section */}
                                <Box className="info" sx={{ background: "f3f3f3", boxShadow: "0 3px 40px 0 rgb(0 0 0 / 10%)", borderRadius: "inherit", overflow: "hidden", p: 6, }}>
                                    {/* Meta Info */}
                                    <Box className="meta" sx={{ mb: 2 }}>
                                        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaCalendarDays style={{ color: "#826a45", marginRight: "5px" }} />
                                                    12 August, 2023
                                                </a>
                                            </li>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaRegCircleUser style={{ color: "#826a45", marginRight: "5px" }} />
                                                    Admin
                                                </a>
                                            </li>
                                        </ul>
                                    </Box>

                                    {/* Title */}
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600, fontFamily: "ui-monospace", mb: 2, }}>
                                        <a href="#" style={{ color: "black", textDecoration: "none" }}>
                                            Announcing if attachment resolution sentiments.
                                        </a>
                                    </Typography>

                                    {/* Description */}
                                    <Typography sx={{ color: "#666", mb: 3, fontWeight: 500, fontFamily: "sans-serif", }}>
                                        Indulgence diminution so discovered mr apartments. Are off under folly
                                        death wrote cause her way spite. Plan upon yet way get cold spot its
                                        week. Almost do am or limits hearts. Resolve parties but why she
                                        shewing. She sang know now.
                                    </Typography>

                                    {/* Learn More Button */}
                                    <Button variant="contained" sx={{
                                        padding: "16px 45px", borderRadius: "30px", background: "#826a45", fontSize: "16px",
                                        "&:hover": { background: "#6f5535" },
                                    }}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                            <Box className="item" sx={{ borderRadius: 2, boxShadow: "inherit", mb: 5, overflow: "hidden", background: "#f3f3f3", }}>
                                {/* Image Section */}
                                <Box className="thumb" sx={{ background: "#f3f3f3", m: 0, overflow: "hidden", borderRadius: "8px 8px 0 0", }}>
                                    <img src="	https://validthemes.net/site-template/restan/assets/img/blog/v2.jpg" alt="Blog" style={{ width: "100%", borderRadius: "inherit" }} />
                                </Box>

                                {/* Content Section */}
                                <Box className="info" sx={{ background: "f3f3f3", boxShadow: "0 3px 40px 0 rgb(0 0 0 / 10%)", borderRadius: "inherit", overflow: "hidden", p: 6, }}>
                                    {/* Meta Info */}
                                    <Box className="meta" sx={{ mb: 2 }}>
                                        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaCalendarDays style={{ color: "#826a45", marginRight: "5px" }} />
                                                    12 July, 2023
                                                </a>
                                            </li>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaRegCircleUser style={{ color: "#826a45", marginRight: "5px" }} />
                                                    Admin
                                                </a>
                                            </li>
                                        </ul>
                                    </Box>

                                    {/* Title */}
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600, fontFamily: "ui-monospace", mb: 2, }}>
                                        <a href="#" style={{ color: "black", textDecoration: "none" }}>
                                            Minuter him own clothes but observe country.
                                        </a>
                                    </Typography>

                                    {/* Description */}
                                    <Typography sx={{ color: "#666", mb: 3, fontWeight: 500, fontFamily: "sans-serif", }}>
                                        Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now
                                    </Typography>

                                    {/* Learn More Button */}
                                    <Button variant="contained" sx={{
                                        padding: "16px 45px", borderRadius: "30px", background: "#826a45", fontSize: "16px",
                                        "&:hover": { background: "#6f5535" },
                                    }}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                            <Box className="item" sx={{ borderRadius: 2, boxShadow: "inherit", mb: 5, overflow: "hidden", background: "#f3f3f3", }}>
                                {/* Image Section */}
                                <Box className="thumb" sx={{ background: "#f3f3f3", m: 0, overflow: "hidden", borderRadius: "8px 8px 0 0", }}>
                                    <img src="https://validthemes.net/site-template/restan/assets/img/blog/v3.jpg" alt="Blog" style={{ width: "100%", borderRadius: "inherit" }} />
                                </Box>

                                {/* Content Section */}
                                <Box className="info" sx={{ background: "f3f3f3", boxShadow: "0 3px 40px 0 rgb(0 0 0 / 10%)", borderRadius: "inherit", overflow: "hidden", p: 6, }}>
                                    {/* Meta Info */}
                                    <Box className="meta" sx={{ mb: 2 }}>
                                        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaCalendarDays style={{ color: "#826a45", marginRight: "5px" }} />
                                                    12 Auguest, 2023
                                                </a>
                                            </li>
                                            <li style={{ display: "inline-block", marginRight: "20px", fontWeight: 500, color: "#666", }}>
                                                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                                                    <FaRegCircleUser style={{ color: "#826a45", marginRight: "5px" }} />
                                                    Admin
                                                </a>
                                            </li>
                                        </ul>
                                    </Box>

                                    {/* Title */}
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600, fontFamily: "ui-monospace", mb: 2, }}>
                                        <a href="#" style={{ color: "black", textDecoration: "none" }}>
                                            Overcame breeding point concerns has terminate
                                        </a>
                                    </Typography>

                                    {/* Description */}
                                    <Typography sx={{ color: "#666", mb: 3, fontWeight: 500, fontFamily: "sans-serif", }}>
                                        Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now                                </Typography>

                                    {/* Learn More Button */}
                                    <Button variant="contained" sx={{
                                        padding: "16px 45px", borderRadius: "30px", background: "#826a45", fontSize: "16px",
                                        "&:hover": { background: "#6f5535" },
                                    }}>
                                        Learn More
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="navigation" sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Pagination
                            count={3}
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
                                            borderRadius: "5px",
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
        </div>
    );
};

export default Blog;
