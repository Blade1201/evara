import React from 'react';
import "../styles/showcase.css";
import Showcase_1 from "../images/showcase-img-1.jpg"
import Showcase_2 from "../images/showcase-img-2.jpg"
import Showcase_3 from "../images/showcase-img-3.jpg"
import Showcase_4 from "../images/showcase-img-4.jpg"
import Showcase_5 from "../images/showcase-img-5.jpg"
import Showcase_6 from "../images/showcase-img-6.jpg"
import Showcase_7 from "../images/showcase-img-7.jpg"
import Showcase_8 from "../images/showcase-img-8.jpg"
import Showcase_9 from "../images/showcase-img-9.jpg"
import {Link} from "react-router-dom";

const Showcase = () => {
    return (
        <section className="showcase section">
            <div className="showcase__container container grid">
                <div className="showcase__wrapper">
                    <h3 className="section__title"> Forró Megjelenés </h3>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_1} alt="showcase_1" className="showcase__img"/>
                        </a>
                        
                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Virágmintás alkalmi pamut ruha</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_2} alt="showcase_2" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Fodros tömör hosszú ujjú blúz</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_3} alt="showcase_3" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Mintás V-nyakú póló</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase__wrapper">
                    <h3 className="section__title"> Ajánlatok és kiárusítás </h3>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_4} alt="showcase_4" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Halmintás foltozott póló</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_5} alt="showcase_5" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Virágmintás ruha</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_6} alt="showcase_6" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Csíkos póló</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase__wrapper">
                    <h3 className="section__title"> Legkelendőbb </h3>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_7} alt="showcase_7" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Mintás hosszú ujjú blúz</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_8} alt="showcase_8" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Mintás maxi ruha</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <Link to="/details" className="showcase__img-box">
                            <img src={Showcase_9} alt="showcase_9" className="showcase__img"/>
                        </Link>

                        <div className="showcase__content">
                            <Link to="/details">
                                <h4 className="showcase__title">Százszorszép virágmintás pántos egyberuha</h4>
                            </Link>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase__wrapper">
                    <h3 className="section__title"> Divatos </h3>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_4} alt="showcase_4" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Halmintás foltozott póló</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_5} alt="showcase_5" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Virágmintás ruha</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="showcase__item">
                        <a href="#" className="showcase__img-box">
                            <img src={Showcase_6} alt="showcase_6" className="showcase__img"/>
                        </a>

                        <div className="showcase__content">
                            <a href="#">
                                <h4 className="showcase__title">Csíkos póló</h4>
                            </a>

                            <div className="showcase__price flex">
                                <span className="new__price">21 799 Ft.</span>
                                <span className="old__price">24 199 Ft.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;