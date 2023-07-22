import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import NewArrivals from "./components/NewArrivals";
import Showcase from "./components/Showcase";
import Coupon from "./components/Coupon";
import Footer from "./components/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Categories/>
            <Products/>
            <NewArrivals/>
            <Showcase/>
            <Coupon/>
            <Footer/>
        </div>
    );
}

export default MainPage;