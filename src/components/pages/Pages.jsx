import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import Header from '../common/header/Header';
import Home from '../Home';
import Footer from '../common/footer/Footer';
import Shop from '../Shop';
import ShopDetail from '../ShopDetail';
import TestimonialMain from '../testimonial/TestimonialMain';
import Error from '../Error';
import Contact from '../Contact';
import Cart from '../Cart';
import Checkout from '../Checkout';

const Pages = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop-detail" element={<ShopDetail />} />
                <Route path="/testimonial" element={<TestimonialMain />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/error" element={<Error />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Pages;
