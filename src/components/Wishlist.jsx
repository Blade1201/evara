import React from 'react';
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_1_2 from "../images/product-1-2.jpg";
import Product_7_1 from "../images/product-7-1.jpg";
import Product_2_1 from "../images/product-2-1.jpg";

const Wishlist = () => {
    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Áruház </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Kívánságlista </span></li>
                </ul>
            </section>

            <section className="wishlist section--lg container">
                <div className="table__container">
                    <table className="table">
                        <tr>
                            <th> Fénykép </th>
                            <th> Név </th>
                            <th> Ár </th>
                            <th> Raktári meglét </th>
                            <th> Tevékenységek </th>
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

                            <td> <span className="table__stock"> Raktáron </span>  </td>

                            <td><a href="#" className="btn btn--sm"> Kosárhoz adás </a> </td>

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

                            <td> <span className="table__stock"> Raktáron </span>  </td>

                            <td><a href="#" className="btn btn--sm"> Kosárhoz adás </a> </td>

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

                            <td> <span className="table__stock"> Raktáron </span>  </td>

                            <td><a href="#" className="btn btn--sm"> Kosárhoz adás </a> </td>

                            <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        </tr>
                    </table>
                </div>
            </section>
            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Wishlist;