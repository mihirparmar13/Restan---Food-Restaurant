import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import "./App.css"
import { Box } from '@mui/material';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import Blog from './Pages/Blog/Blog';
import Shop from './Pages/Shop/Shop';
import 'locomotive-scroll/dist/locomotive-scroll.css'; 
import ContactUs from './Pages/Contact Us/ContactUs';
import SideNav from './Components/SideNav';

function App() {
  const scrollRef = useRef(null); 

  useEffect(() => {
    if (!scrollRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy(); 
    };
  }, []);

  return (
    <Box ref={scrollRef} data-scroll-container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Box>
  );
}

export default App;
