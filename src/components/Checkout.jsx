import React, {useState} from 'react';
import "../styles/checkout.css";
import Header from "./Header";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Product_1_2 from "../images/product-1-2.jpg";
import Product_2_1 from "../images/product-2-1.jpg";
import Product_7_1 from "../images/product-7-1.jpg";

const Checkout = () => {

    const [selectedPayment, setSelectedPayment] = useState('');

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Áruház </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Pénztár </span></li>
                </ul>
            </section>

            <section className="checkout section--lg">
                <div className="checkout__container container grid">
                    <div className="checkout__group">
                        <h3 className="section__title"> Számlázási Adatok </h3>

                        <form className="form grid">
                            <input type="text" placeholder="Név" className="form__input"/>

                            <input type="text" placeholder="Megye" className="form__input"/>

                            <input type="text" placeholder="Város" className="form__input"/>

                            <input type="number" placeholder="Irányítószám" className="form__input"/>

                            <input type="text" placeholder="Cím" className="form__input"/>

                            <input type="tel" placeholder="Telefonszám" className="form__input"/>

                            <input type="email" placeholder="Email" className="form__input"/>

                            <h3 className="checkout__title"> Egyéb Adatok </h3>

                            <textarea name="" placeholder="Rendelési Jegyzék" id="" cols="30" rows="10" className="form__input textarea"></textarea>
                        </form>
                    </div>

                    <div className="checkout__group">
                        <h3 className="section__title"> Kosár Összesen </h3>

                        <table className="order__table">
                            <tr>
                                <th colSpan="2"> Termékek </th>
                                <th> Fizetendő </th>
                            </tr>

                            <tr>
                                <td><img src={Product_1_2} alt="product_1_2" className="order__img"/> </td>

                                <td>
                                    <h3 className="table__title"> Női Nyári Pulóver </h3>
                                    <p className="table__quantity"> x 2 </p>
                                </td>

                                <td> <span className="table__price"> 18 699 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td><img src={Product_2_1} alt="product_2_1" className="order__img"/> </td>

                                <td>
                                    <h3 className="table__title"> Női Nyári Pulóver </h3>
                                    <p className="table__quantity"> x 1 </p>
                                </td>

                                <td> <span className="table__price"> 13 199 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td><img src={Product_7_1} alt="product_7_1" className="order__img"/> </td>

                                <td>
                                    <h3 className="table__title"> Női Nyári Pulóver </h3>
                                    <p className="table__quantity"> x 2 </p>
                                </td>

                                <td> <span className="table__price"> 8 999 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td> <span className="order__subtitle"> Részösszeg </span> </td>
                                <td colSpan="2"> <span className="table__price"> 24 799 Ft. </span> </td>
                            </tr>

                            <tr>
                                <td> <span className="order__subtitle"> Szállítás </span> </td>
                                <td colSpan="2"> <span className="table__price"> Ingyenes Szállítás </span> </td>
                            </tr>

                            <tr>
                                <td> <span className="order__subtitle"> Fizetendő </span> </td>
                                <td colSpan="2"> <span className="order__grand-total"> 24 799 Ft. </span> </td>
                            </tr>
                        </table>

                        <div className="payment__methods">
                            <h3 className="checkout__title payment__title"> Fizetés </h3>
                            
                            <div className="payment__option flex">
                                <input type="radio" id="bank" value="bank" className="payment__input" checked={selectedPayment === 'bank'}
                                       onChange={handlePaymentChange}/>
                                <label htmlFor="bank" className="payment__label"> Közvetlen Banki Átutalás </label>
                            </div>

                            <div className="payment__option flex">
                                <input type="radio" id="check" value="check" className="payment__input" checked={selectedPayment === 'check'}
                                       onChange={handlePaymentChange}/>
                                <label htmlFor="check" className="payment__label"> Csekkbefizetés </label>
                            </div>

                            <div className="payment__option flex">
                                <input type="radio" id="paypal" value="paypal" className="payment__input" checked={selectedPayment === 'paypal'}
                                       onChange={handlePaymentChange}/>
                                <label htmlFor="paypal" className="payment__label"> Paypal </label>
                            </div>
                        </div>

                        <button className="btn btn--md"> Rendelés Leadása </button>
                    </div>
                </div>
            </section>

            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Checkout;