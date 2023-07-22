import React from 'react';
import "../styles/authentication.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";

const Authentication = () => {
    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Bejelentkezés / Regisztrálás </span></li>
                </ul>
            </section>


            <section className="login-register section--lg">
                <div className="login-register__container container grid">
                    <div className="login">
                        <h3 className="section__title"> Bejelentkezés </h3>

                        <form className="form grid">
                            <input type="email" className="form__input" placeholder="Email"/>

                            <input type="password" className="form__input" placeholder="Jelszó"/>

                            <div className="form__btn">
                                <button className="btn"> Bejelentkezés </button>
                            </div>
                        </form>
                    </div>


                    <div className="register">
                        <h3 className="section__title"> Regisztrálás </h3>

                        <form className="form grid">
                            <input type="text" className="form__input" placeholder="Felhasználónév"/>

                            <input type="email" className="form__input" placeholder="Email"/>

                            <input type="password" className="form__input" placeholder="Jelszó"/>

                            <input type="password" className="form__input" placeholder="Jelszó megerősítése"/>

                            <div className="form__btn">
                                <button className="btn"> Regisztrálás </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Authentication;