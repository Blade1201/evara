import React from 'react';
import "../styles/coupon.css";
import Icon_Email from "../images/icon-email.svg";

const Newsletter = () => {
    return (
        <section className="coupon section">
            <div className="coupon__container container grid">
                <h3 className="coupon__title flex">
                    <img src={Icon_Email} alt="icon-email" className="coupon__icon"/>
                    Regisztráljon
                </h3>

                <p className="coupon__description">
                    ... és kapjon 15 000 Ft. kupont első vásárlására
                </p>

                <form action="" className="coupon__form">
                    <input type="text" placeholder="Irja be az email címét" className="coupon__input"/>

                    <button type="submit" className="coupon__btn"> Regisztrálás </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;