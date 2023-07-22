import React, {useEffect} from 'react';
import "../styles/categories.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Category_1 from "../images/category-1.jpg";
import Category_2 from "../images/category-2.jpg";
import Category_3 from "../images/category-3.jpg";
import Category_4 from "../images/category-4.jpg";
import Category_5 from "../images/category-5.jpg";
import Category_6 from "../images/category-6.jpg";
import Category_7 from "../images/category-7.jpg";
import Category_8 from "../images/category-8.jpg";

const Categories = () => {

    useEffect(() => {
            const swiperCategory = document.querySelector('.category__container');

            const buttonCategoryPrev = document.querySelector('.button-category-prev');
            buttonCategoryPrev.addEventListener('click', () => {
                swiperCategory.swiper.slidePrev();
            });

            const buttonCategoryNext = document.querySelector('.button-category-next');
            buttonCategoryNext.addEventListener('click', () => {
            swiperCategory.swiper.slideNext();
            });
        },[])


    return (
        <section className="container section">
            <h3 className="section__title">
                <span> Népszerű </span> Kategóriák
            </h3>


            <div className="button-category-prev">
                <i className="fi fi-rs-angle-left"></i>
            </div>

            <div className="button-category-next">
                <i className="fi fi-rs-angle-right"></i>
            </div>

            <Swiper
                breakpoints={{
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                        },
                    }}
                    modules={[Navigation]} className="category__container">

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_1} alt="category-1" className="category__img"/>

                            <h3 className="category__title"> Póló </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_2} alt="category-2" className="category__img"/>

                            <h3 className="category__title"> Táskák </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_3} alt="category-3" className="category__img"/>

                            <h3 className="category__title"> Szandál </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_4} alt="category-4" className="category__img"/>

                            <h3 className="category__title"> Sál Sapka </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_5} alt="category-5" className="category__img"/>

                            <h3 className="category__title"> Cipők </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_6} alt="category-6" className="category__img"/>

                            <h3 className="category__title"> Párnahuzat </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_7} alt="category-7" className="category__img"/>

                            <h3 className="category__title"> Egyberuha </h3>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className="category__item">
                        <a href="#">
                            <img src={Category_8} alt="category-8" className="category__img"/>

                            <h3 className="category__title"> Kalapok </h3>
                        </a>
                    </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Categories;