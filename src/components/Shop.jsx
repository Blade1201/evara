import React from 'react';
import "../styles/shop.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_1_1 from "../images/product-1-1.jpg";
import Product_1_2 from "../images/product-1-2.jpg";
import Product_2_1 from "../images/product-2-1.jpg";
import Product_2_2 from "../images/product-2-2.jpg";
import Product_3_1 from "../images/product-3-1.jpg";
import Product_3_2 from "../images/product-3-2.jpg";
import Product_4_1 from "../images/product-4-1.jpg";
import Product_4_2 from "../images/product-4-2.jpg";
import Product_5_1 from "../images/product-5-1.jpg";
import Product_5_2 from "../images/product-5-2.jpg";
import Product_6_1 from "../images/product-6-1.jpg";
import Product_6_2 from "../images/product-6-2.jpg";
import Product_7_1 from "../images/product-7-1.jpg";
import Product_7_2 from "../images/product-7-2.jpg";
import Product_8_1 from "../images/product-8-1.jpg";
import Product_8_2 from "../images/product-8-2.jpg";
import {Link} from "react-router-dom";

const Shop = () => {
    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Áruház </span></li>
                </ul>
            </section>

            <section className="products section--lg container">
                <p className="total__products"><span> 688 </span>terméket találtunk az Ön számára</p>

                <div className="products__container grid">
                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_1_1} alt="product_1_1" className="product__img default"/>

                                <img src={Product_1_2} alt="product_1_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-pink">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_2_1} alt="product_2_1" className="product__img default"/>

                                <img src={Product_2_2} alt="product_2_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-green">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_3_1} alt="product_3_1" className="product__img default"/>

                                <img src={Product_3_2} alt="product_3_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-orange">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_4_1} alt="product_4_1" className="product__img default"/>

                                <img src={Product_4_2} alt="product_4_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-blue">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_5_1} alt="product_5_1" className="product__img default"/>

                                <img src={Product_5_2} alt="product_5_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-pink">-30%</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_6_1} alt="product_6_1" className="product__img default"/>

                                <img src={Product_6_2} alt="product_6_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-pink">-22%</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_7_1} alt="product_7_1" className="product__img default"/>

                                <img src={Product_7_2} alt="product_7_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-green">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <Link to="/details" className="product__images">
                                <img src={Product_8_1} alt="product_8_1" className="product__img default"/>

                                <img src={Product_8_2} alt="product_8_2" className="product__img hover"/>
                            </Link>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_5_1} alt="product_5_1" className="product__img default"/>

                                <img src={Product_5_2} alt="product_5_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-pink">-30%</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_6_1} alt="product_6_1" className="product__img default"/>

                                <img src={Product_6_2} alt="product_6_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-pink">-22%</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <a href="#" className="product__images">
                                <img src={Product_7_1} alt="product_7_1" className="product__img default"/>

                                <img src={Product_7_2} alt="product_7_2" className="product__img hover"/>
                            </a>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                            <div className="product__badge light-green">Forró ajánlat</div>
                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>

                    <div className="product__item">
                        <div className="product__banner">
                            <Link to="/details" className="product__images">
                                <img src={Product_8_1} alt="product_8_1" className="product__img default"/>

                                <img src={Product_8_2} alt="product_8_2" className="product__img hover"/>
                            </Link>

                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Gyors nézet">
                                    <i className="fi fi-rr-eye"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Kívánságlistához adás">
                                    <i className="fi fi-rr-heart"></i>
                                </a>

                                <a href="#" className="action__btn" aria-label="Összehasonlítás">
                                    <i className="fi fi-rr-shuffle"></i>
                                </a>
                            </div>

                        </div>

                        <div className="product__content">
                            <span className="product__category">Ruházat</span>

                                <h3 className="product__title">Mintás Ingek</h3>

                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <div className="product__price flex">
                                <span className="new__price">22 000 Ft.</span>
                                <span className="old__price">24 000 Ft.</span>
                            </div>

                            <a href="#" className="action__btn cart__btn" aria-label="Kosárhoz adás">
                                <i className="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <ul className="pagination">
                    <li><a href="#" className="pagination__link active">01</a></li>
                    <li><a href="#" className="pagination__link">02</a></li>
                    <li><a href="#" className="pagination__link">03</a></li>
                    <li><a href="#" className="pagination__link">...</a></li>
                    <li><a href="#" className="pagination__link">16</a></li>
                    <li>
                        <a href="#" className="pagination__link icon">
                            <i className="fi fi-rs-angle-double-small-right"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Shop;