import React from 'react';
import "../styles/cart.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_1_2 from "../images/product-1-2.jpg";
import Product_2_1 from "../images/product-2-1.jpg";
import Product_7_1 from "../images/product-7-1.jpg";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Áruház </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Kosár </span></li>
                </ul>
            </section>

            <section className="cart section--lg container">
                <div className="table__container">
                    <table className="table">
                        <tr>
                            <th> Fénykép </th>
                            <th> Név </th>
                            <th> Ár </th>
                            <th> Mennyiség </th>
                            <th> Fizetendő </th>
                            <th> Eltávolítás </th>
                        </tr>

                        <tr>
                            <td> <img src={Product_1_2} alt="product_1_2" className="table__img"/> </td>

                            <td>
                                <h3 className="table__title">
                                    Női Pulóver
                                </h3>
                                <p className="table__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </td>

                            <td> <span className="table__price"> 14 799 Ft. </span> </td>

                            <td> <input type="number" value="3" className="quantity"/> </td>

                            <td> <span className="table__subtotal"> 44 400 Ft. </span> </td>

                            <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        </tr>

                        <tr>
                            <td> <img src={Product_7_1} alt="product_7_1" className="table__img"/> </td>

                            <td>
                                <h3 className="table__title">
                                    Női Pulóver
                                </h3>
                                <p className="table__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </td>

                            <td> <span className="table__price"> 14 799 Ft. </span> </td>

                            <td> <input type="number" value="3" className="quantity"/> </td>

                            <td> <span className="table__subtotal"> 44 400 Ft. </span> </td>

                            <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        </tr>

                        <tr>
                            <td> <img src={Product_2_1} alt="product_2_1" className="table__img"/> </td>

                            <td>
                                <h3 className="table__title">
                                    Női Pulóver
                                </h3>
                                <p className="table__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </td>

                            <td> <span className="table__price"> 14 799 Ft. </span> </td>

                            <td> <input type="number" value="3" className="quantity"/> </td>

                            <td> <span className="table__subtotal"> 44 400 Ft. </span> </td>

                            <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        </tr>
                    </table>
                </div>

                <div className="cart__actions">
                    <a href="#" className="btn flex  btn--md">
                        <i className="fi fi-rs-shuffle"></i>
                        Kosár Frissítése
                    </a>

                    <Link to="/" className="btn flex  btn--md">
                        <i className="fi fi-rs-shopping-bag"></i>
                        Vásárlás Folytatása
                    </Link>
                </div>

                <div className="divider">
                    <i className="fi fi-rs-fingerprint"></i>
                </div>

                <div className="cart__group grid">
                    <div>
                        <div className="cart__shipping">
                            <h3 className="section__title"> Szállítás Kiszámítása </h3>

                            <form className="form grid">
                                <input type="text" placeholder="Megye" className="form__input"/>

                                <div className="form__group grid">
                                    <input type="text" placeholder="Város" className="form__input"/>

                                    <input type="text" placeholder="Irányítószám" className="form__input"/>
                                </div>

                                <div className="form__btn">
                                    <button className="btn flex btn--sm">
                                        <i className="fi fi-rs-shuffle"></i>
                                        Frissítés
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="cart__coupon">
                            <h3 className="section__title"> Kupon Hozzáadása </h3>

                            <form className="coupon__form form grid">
                                <div className="form__group grid">
                                    <input type="text" className="form__input" placeholder="Irja be a kupon számot"/>

                                    <div className="form__btn">
                                        <button className="btn flex btn--sm">
                                            <i className="fi fi-rs-label"></i>
                                            Hozzáadás
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="cart__total">
                        <h3 className="section__title"> Kosár Tartalma </h3>

                        <table className="cart__total-table">
                            <tr>
                                <td> <span className="cart__total-title"> Összesen </span> </td>
                                <td> <span className="cart__total-price"> 133 200 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td> <span className="cart__total-title"> Szállítás </span> </td>
                                <td> <span className="cart__total-price"> 2 199 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td> <span className="cart__total-title"> Fizetendő </span> </td>
                                <td> <span className="cart__total-price"> 135 399 Ft. </span> </td>
                            </tr>
                        </table>

                        <Link to="/checkout" className="btn flex btn--md">
                            <i className="fi fi-rs-box-alt"></i>
                            Tovább a pénztárhoz
                        </Link>
                    </div>
                </div>
            </section>

            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Cart;