import React, {useEffect} from 'react';
import "../styles/products.css";
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
import Product_9_1 from "../images/product-9-1.jpg";
import Product_9_2 from "../images/product-9-2.jpg";
import Product_10_1 from "../images/product-10-1.jpg";
import Product_10_2 from "../images/product-10-2.jpg";
import Product_11_1 from "../images/product-11-1.jpg";
import Product_11_2 from "../images/product-11-2.jpg";
import Product_12_1 from "../images/product-12-1.jpg";
import Product_12_2 from "../images/product-12-2.jpg";
import Product_13_1 from "../images/product-13-1.jpg";
import Product_13_2 from "../images/product-13-2.jpg";
import {Link} from "react-router-dom";

const Products = () => {

    useEffect(() => {
        const tabs = document.querySelectorAll("[data-target]");
        let activeTab = tabs[0];

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const content = document.querySelector(tab.dataset.target);

                activeTab.classList.remove("active-tab");
                const activeTabContent = document.querySelector(activeTab.dataset.target);
                activeTabContent.classList.remove("active-tab");

                tab.classList.add("active-tab");
                content.classList.add("active-tab");

                activeTab = tab;
            });
        });

        return () => {
            tabs.forEach((tab) => {
                tab.removeEventListener("click", () => {
                    const content = document.querySelector(tab.dataset.target);

                    activeTab.classList.remove("active-tab");
                    const activeTabContent = document.querySelector(activeTab.dataset.target);
                    activeTabContent.classList.remove("active-tab");

                    tab.classList.add("active-tab");
                    content.classList.add("active-tab");

                    activeTab = tab;
                });
            });
        };
    }, []);


    return (
        <section className="products container section">
            <div className="tab__btns">
                <span className="tab__btn active-tab" data-target="#featured">Kiemelt</span>
                <span className="tab__btn" data-target="#popular">Népszerű</span>
                <span className="tab__btn" data-target="#newly-added">Újonnan hozzáadott</span>
            </div>


            <div className="tab__items">

                <div className="tab__item active-tab" id="featured">
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
                    </div>
                </div>

                <div className="tab__item" id="popular">
                    <div className="products__container grid">
                        <div className="product__item">
                            <div className="product__banner">
                                <a href="#" className="product__images">
                                    <img src={Product_9_1} alt="product_9_1" className="product__img default"/>

                                    <img src={Product_9_2} alt="product_9_2" className="product__img hover"/>
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
                                    <img src={Product_10_1} alt="product_10_1" className="product__img default"/>

                                    <img src={Product_10_2} alt="product_10_2" className="product__img hover"/>
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
                                    <img src={Product_11_1} alt="product_11_1" className="product__img default"/>

                                    <img src={Product_11_2} alt="product_11_2" className="product__img hover"/>
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
                </div>

                <div className="tab__item" id="newly-added">
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
                                    <img src={Product_12_1} alt="product_12_1" className="product__img default"/>

                                    <img src={Product_12_2} alt="product_12_2" className="product__img hover"/>
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
                                    <img src={Product_13_1} alt="product_13_1" className="product__img default"/>

                                    <img src={Product_13_2} alt="product_13_2" className="product__img hover"/>
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
                                    <img src={Product_10_1} alt="product_10_1" className="product__img default"/>

                                    <img src={Product_10_2} alt="product_10_2" className="product__img hover"/>
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
                                    <img src={Product_9_1} alt="product_9_1" className="product__img default"/>

                                    <img src={Product_9_2} alt="product_9_2" className="product__img hover"/>
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
                </div>

            </div>
        </section>
    );
};

export default Products;