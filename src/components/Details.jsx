import React, {useEffect, useState} from 'react';
import "../styles/details.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_8_1 from "../images/product-8-1.jpg"
import Product_8_2 from "../images/product-8-2.jpg"
import Avatar_1 from "../images/avatar-1.jpg"
import Avatar_2 from "../images/avatar-2.jpg"
import Avatar_3 from "../images/avatar-3.jpg"
import Product_4_1 from "../images/product-4-1.jpg";
import Product_4_2 from "../images/product-4-2.jpg";
import Product_5_1 from "../images/product-5-1.jpg";
import Product_5_2 from "../images/product-5-2.jpg";
import Product_6_1 from "../images/product-6-1.jpg";
import Product_6_2 from "../images/product-6-2.jpg";
import Product_7_1 from "../images/product-7-1.jpg";
import Product_7_2 from "../images/product-7-2.jpg";

const Details = () => {

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


    const [mainImgSrc, setMainImgSrc] = useState(Product_8_1);
    const smallImgSrcs = [Product_8_2, Product_8_1, Product_8_2];

    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Divat </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Henley póló </span></li>
                </ul>
            </section>

            <section className="details section--lg">
                <div className="details__container container grid">
                    <div className="details__group">
                        <img src={mainImgSrc} alt="product_8_1" className="details__img"/>

                        <div className="details__small-images grid">
                            {smallImgSrcs.map((src) => (
                                <img
                                    alt="small__img"
                                    key={src}
                                    className="details__small-img"
                                    src={src}
                                    onClick={() => setMainImgSrc(src)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="details__group">
                        <h3 className="details__title"> Henley póló </h3>
                        <p className="details__brand"> Márka: <span> Adidas </span> </p>

                        <div className="details__price flex">
                            <span className="new__price">22 000 Ft.</span>
                            <span className="old__price">24 699 Ft.</span>
                            <span className="save__price">15% akció</span>
                        </div>

                        <p className="short__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aperiam consequuntur deleniti
                            dolore doloribus enim esse eveniet illum in iusto molestias nemo nobis nulla officia pariatur, quis repudiandae voluptatum?
                        </p>

                        <ul className="product__list">
                            <li className="list__item flex">
                                <i className="fi fi-rs-crown"></i> 1 év garancia
                            </li>

                            <li className="list__item flex">
                                <i className="fi fi-rs-refresh"></i> 30 napos visszatérítési lehetőség
                            </li>

                            <li className="list__item flex">
                                <i className="fi fi-rs-credit-card"></i> Elérhető utánvétel
                            </li>
                        </ul>

                        <div className="details__color flex">
                            <span className="details__color-title">Szín</span>

                            <ul className="color__list">
                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(37,100%,65%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(353,100%,67%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(49,100%,60%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(304,100%,78%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(126,61%,52%)"}}></a>
                                </li>
                            </ul>
                        </div>

                        <div className="details__size flex">
                            <span className="details__size-title">Méret</span>

                            <ul className="size__list">
                                <li>
                                    <a href="#" className="size__link size-active">S</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">M</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">L</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">XL</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">XXL</a>
                                </li>
                            </ul>
                        </div>

                        <div className="details__action">
                            <input type="number" className="quantity" defaultValue="1"/>

                            <a href="#" className="btn btn--sm"> Kosárhoz adás </a>

                            <a href="#" className="details__action-btn">
                                <i className="fi fi-rs-heart"></i>
                            </a>
                        </div>

                        <ul className="details__meta">
                            <li className="meta__list flex"> <span>Termékszám:</span> FWM15VKT </li>
                            <li className="meta__list flex"> <span>Címke:</span> Szövet, Női, Ruházat</li>
                            <li className="meta__list flex"> <span>Elérhetőség:</span> 8 termék van raktáron</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="details__tab container">
                <div className="detail__tabs">
                    <span className="detail__tab active-tab" data-target="#info"> Részletes információ </span>
                    <span className="detail__tab" data-target="#reviews"> Vélemények(3) </span>
                </div>

                <div className="details__tabs-content">
                    <div className="details__tab-content active-tab" id="info">
                            <table className="info__table">
                                <tr>
                                    <th> Anyag </th>
                                    <td> Szövet</td>
                                </tr>

                                <tr>
                                    <th> Méret </th>
                                    <td> S, M, L, XL, XXL </td>
                                </tr>

                                <tr>
                                    <th> Szín </th>
                                    <td> Narancssárga, Piros, Sárga, Rózsaszín, Zöld </td>
                                </tr>
                            </table>
                    </div>

                    <div className="details__tab-content" id="reviews">
                        <div className="reviews__container grid">
                            <div className="review__single">
                                <div>
                                    <img src={Avatar_1} alt="user_1" className="review__img"/>
                                    <h4 className="review__title">Takács Norbert</h4>
                                </div>

                                <div className="review__data">
                                    <div className="review__rating">
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                    </div>

                                    <p className="review__description"> Köszönöm! Gyorsan megérkezett Szegedre. </p>

                                    <span className="review__date"> 2024 Február 14. 15:37 </span>
                                </div>
                            </div>

                            <div className="review__single">
                                <div>
                                    <img src={Avatar_2} alt="user_2" className="review__img"/>
                                    <h4 className="review__title">Molnár Gréta</h4>
                                </div>

                                <div className="review__data">
                                    <div className="review__rating">
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                    </div>

                                    <p className="review__description"> Nagyszerű minőség jó áron! </p>

                                    <span className="review__date"> 2024 Március 8. 08:14 </span>
                                </div>
                            </div>

                            <div className="review__single">
                                <div>
                                    <img src={Avatar_3} alt="user_3" className="review__img"/>
                                    <h4 className="review__title">Molnár Áron</h4>
                                </div>

                                <div className="review__data">
                                    <div className="review__rating">
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                        <i className="fi fi-rs-star"></i>
                                    </div>

                                    <p className="review__description"> Tökéletes ajándék a házassági évfordulóra! </p>

                                    <span className="review__date"> 2024 Április 5. 18:54 </span>
                                </div>
                            </div>
                        </div>

                        <div className="review__form">
                            <h4 className="review__form-title"> Vélemyény hozzáadása </h4>

                            <div className="rate__product">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>

                            <form className="form grid">
                                <textarea className="form__input textarea" placeholder="Irjon hozzászólást"></textarea>
                                
                                <div className="form__group grid">
                                    <input type="text" placeholder="Név" className="form__input"/>
                                </div>

                                <div className="form__btn">
                                    <button className="btn"> Vélemény hozzáadása </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products container section--lg">
                <h3 className="section__title"> <span> Kapcsolódó </span> Termékek </h3>

                <div className="products__container grid">
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

                            <a href="#">
                                <h3 className="product__title">Mintás Ingek</h3>
                            </a>

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

                            <a href="#">
                                <h3 className="product__title">Mintás Ingek</h3>
                            </a>

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

                            <a href="#">
                                <h3 className="product__title">Mintás Ingek</h3>
                            </a>

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

                            <a href="#">
                                <h3 className="product__title">Mintás Ingek</h3>
                            </a>

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
            </section>
            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Details;