import React from 'react';
import "../styles/compare.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_2_1 from "../images/product-2-1.jpg";
import Product_4_1 from "../images/product-4-1.jpg";
import Product_7_1 from "../images/product-7-1.jpg";
import {Link} from "react-router-dom";

const Compare = () => {
    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Áruház </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Összehasonlítás </span></li>
                </ul>
            </section>

            <section className="compare container section--lg">
                <table className="compare__table">
                    <tr>
                        <th> Fénykép </th>
                        <td><img src={Product_2_1} alt="product_2_1" className="compare__img"/> </td>

                        <td><img src={Product_4_1} alt="product_4_1" className="compare__img"/> </td>

                        <td><img src={Product_7_1} alt="product_7_1" className="compare__img"/> </td>
                    </tr>

                    <tr>
                        <th> Név </th>
                        <td> <h3 className="table__title"> Póló </h3> </td>
                        <td> <h3 className="table__title"> Rövidnadrág</h3> </td>
                        <td> <h3 className="table__title"> Póló </h3> </td>
                    </tr>

                    <tr>
                        <th> Ár </th>
                        <td> <span className="table__price"> 6 199 Ft. </span> </td>

                        <td> <span className="table__price"> 11 499 Ft. </span> </td>

                        <td> <span className="table__price"> 9 999 Ft. </span> </td>
                    </tr>

                    <tr>
                        <th> Leírás </th>
                        <td>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fuga ipsum luptatum.</p>
                        </td>

                        <td>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fuga ipsum luptatum.</p>
                        </td>

                        <td>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fuga ipsum luptatum.</p>
                        </td>
                    </tr>

                    <tr>
                        <th> Színek </th>
                        <td>
                            <ul className="color__list compare__colors">
                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(37,100%,65%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(353,100%,67%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(49,100%,60%)"}}></span>
                                </li>
                            </ul>
                        </td>

                        <td>
                            <ul className="color__list compare__colors">
                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(37,100%,65%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(353,100%,67%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(49,100%,60%)"}}></span>
                                </li>
                            </ul>
                        </td>

                        <td>
                            <ul className="color__list compare__colors">
                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(37,100%,65%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(353,100%,67%)"}}></span>
                                </li>

                                <li>
                                    <span className="color__link" style={{backgroundColor:"hsl(49,100%,60%)"}}></span>
                                </li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <th> Raktári meglét </th>
                        <td> <span className="table__stock"> Nincs készleten </span> </td>
                        <td> <span className="table__stock"> Nincs készleten </span> </td>
                        <td> <span className="table__stock"> Nincs készleten </span> </td>
                    </tr>

                    <tr>
                        <th> Súly </th>
                        <td> <span className="table__weight"> 150 gramm </span> </td>
                        <td> <span className="table__weight"> 150 gramm </span> </td>
                        <td> <span className="table__weight"> 150 gramm </span> </td>
                    </tr>

                    <tr>
                        <th> Méretek </th>
                        <td> <span className="table__dimension"> Nem érhető el </span> </td>
                        <td> <span className="table__dimension"> Nem érhető el </span> </td>
                        <td> <span className="table__dimension"> Nem érhető el </span> </td>
                    </tr>

                    <tr>
                        <th> Vásárlás </th>
                        <td> <Link to="/cart" className="btn btn--sm"> Kosárhoz adás </Link> </td>
                        <td> <Link to="/cart" className="btn btn--sm"> Kosárhoz adás </Link> </td>
                        <td> <Link to="/cart" className="btn btn--sm"> Kosárhoz adás </Link> </td>
                    </tr>

                    <tr>
                        <th> Eltávolítás </th>
                        <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                        <td> <i className="fi fi-rs-trash table__trash"></i> </td>
                    </tr>
                </table>
            </section>

            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Compare;