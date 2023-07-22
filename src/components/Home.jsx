import React from 'react';
import "../styles/home.css";
import Home__Img from "../images/home-img.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section className="home section--lg">
            <div className="home__container container grid">
                <div className="home__content">
                    <span className="home__subtitle"> Forró ajánlatok </span>

                    <h1 className="home__title">
                        Divatos <span>Nagy Kollekció</span>
                    </h1>

                    <p className="home__description">
                        Takarítson meg akár 20%-ot kuponjaival
                    </p>

                    <Link to="/shop" className="btn"> Vásárlás </Link>
                </div>

                <img src={Home__Img} alt="home__img" className="home__img"/>
            </div>
        </section>
    );
};

export default Home;