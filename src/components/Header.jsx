import React, {useState} from 'react';
import "../styles/header.css";
import Logo from "../images/logo.svg";
import Icon_Heart from "../images/icon-heart.svg";
import Icon_Cart from "../images/icon-cart.svg";
import Menu_Burger from "../images/menu-burger.svg";
import {Link} from "react-router-dom";

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleNavToggle = () => {
        setClicked(!clicked);
    };

    const handleNavClose = () => {
        setClicked(false);
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__container container">
                    <div className="header__contact">
                        <span>(+36) 209 640 267</span>
                        <span> Telephelyünk </span>
                    </div>

                    <p className="header__alert-news">
                        Takarítson meg többet kuponjaival
                    </p>

                    <Link to="/authentication" className="header__top-action">
                        Bejelentkezés
                    </Link>
                </div>
            </div>
            
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <img src={Logo} alt="logo" className="nav__logo-img"/>
                </Link>


                <div id="nav-menu" className={`nav__menu ${clicked ? "show-menu" : ""}`}>
                    <div className="nav__menu-top">
                        <Link to="/" className="nav__menu-logo">
                            <img src={Logo} alt="logo"/>
                        </Link>

                        <div className="nav__close" id="nav-close" onClick={handleNavClose}>
                            <i className="fi fi-rs-cross-small"></i>
                        </div>
                    </div>

                    <ul className="nav__list">
                        <li><Link to="/" className="nav__link active-link"> Kezdőlap </Link></li>
                        <li><Link to="/shop" className="nav__link"> Áruház </Link></li>
                        <li><Link to="/account" className="nav__link"> Fiókom </Link> </li>
                        <li><Link to="/compare" className="nav__link"> Összehasonlitás </Link> </li>
                        <li><Link to="/authentication" className="nav__link"> Bejelentkezés </Link> </li>
                    </ul>
                </div>

                <div className="header__user-actions">
                    <Link to="/wishlist" className="header__action-btn">
                        <img src={Icon_Heart} alt="heart"/>
                        <span className="count">3</span>
                    </Link>

                    <Link to="/cart" className="header__action-btn">
                        <img src={Icon_Cart} alt="cart"/>
                        <span className="count">3</span>
                    </Link>

                    <div className="header__action-btn nav__toggle" id="nav-toggle" onClick={handleNavToggle}>
                        <img src={Menu_Burger} alt="menu"/>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;