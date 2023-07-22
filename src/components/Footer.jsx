import React from 'react';
import "../styles/footer.css";
import Logo from "../images/logo.svg"
import Icon_Facebook from "../images/icon-facebook.svg";
import Icon_Twitter from "../images/icon-twitter.svg";
import Icon_Instagram from "../images/icon-instagram.svg";
import Icon_Pinterest from "../images/icon-pinterest.svg";
import Icon_Youtube from "../images/icon-youtube.svg";
import Payment_Method from "../images/payment-method.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__container grid">
                <div className="footer__content">

                        <img src={Logo} alt="logo" className="footer__logo-img"/>

                    <h4 className="footer__subtitle"> Elérhetőség </h4>

                    <p className="footer__description">
                       <span> Cím: </span> 4400 Nyíregyháza, Városmajor utca 4.
                    </p>

                    <p className="footer__description">
                        <span> Telefonszám: </span> +36 20 964 0267
                    </p>

                    <p className="footer__description">
                        <span> Munkaidő: </span> 08:00 - 16:00, Hétfő - Péntek
                    </p>
                    
                    <div className="footer__social">
                        <h4 className="footer__subtitle"> Közösségi média </h4>
                        
                        <div className="footer__social-links flex">
                            <a href="#">
                                <img src={Icon_Facebook} alt="icon_facebook" className="footer__social-icon"/>
                            </a>

                            <a href="#">
                                <img src={Icon_Twitter} alt="icon_twitter" className="footer__social-icon"/>
                            </a>

                            <a href="#">
                                <img src={Icon_Instagram} alt="icon_instagram" className="footer__social-icon"/>
                            </a>

                            <a href="#">
                                <img src={Icon_Pinterest} alt="icon_pinterest" className="footer__social-icon"/>
                            </a>

                            <a href="#">
                                <img src={Icon_Youtube} alt="icon_youtube" className="footer__social-icon"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title"> Címünk </h3>

                    <ul className="footer__links">
                        <li><a href="#" className="footer__link"> Rólunk </a></li>
                        <li><a href="#" className="footer__link"> Szerzői jogi védelem </a></li>
                        <li><a href="#" className="footer__link"> Felhasználási feltételek </a></li>
                        <li><a href="#" className="footer__link"> Elérhetőségünk </a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title"> Fiókom</h3>

                    <ul className="footer__links">
                        <li><Link to="/authentication" className="footer__link"> Bejelentkezés </Link></li>
                        <li><Link to="/cart" className="footer__link"> Kosár megnézése </Link></li>
                        <li><Link to="/wishlist" className="footer__link"> Kívánságlista </Link></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Biztonságos fizetési átjárók</h3>

                    <img src={Payment_Method} alt="payment_method" className="payment__img"/>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="copyright"> &copy; 2024 Evara. Minden jog fenntartva. </p>
            </div>
        </footer>
    );
};

export default Footer;