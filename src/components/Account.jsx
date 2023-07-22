import React, {useEffect} from 'react';
import "../styles/account.css";
import Coupon from "./Coupon";
import Footer from "./Footer";
import Header from "./Header";

const Account = () => {

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
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Felhasználói Fiók </span></li>
                </ul>
            </section>

            <section className="accounts section--lg">
                <div className="accounts__container container grid">
                    <div className="account__tabs">
                        <p className="account__tab active-tab" data-target="#dashboard">
                            <i className="fi fi-rs-settings-sliders"></i>
                            Admin Panel
                        </p>

                        <p className="account__tab" data-target="#orders">
                            <i className="fi fi-rs-shopping-bag"></i>
                            Rendelések
                        </p>

                        <p className="account__tab" data-target="#update-profile">
                            <i className="fi fi-rs-user"></i>
                            Fiók módosítása
                        </p>

                        <p className="account__tab" data-target="#address">
                            <i className="fi fi-rs-marker"></i>
                            Címem
                        </p>

                        <p className="account__tab" data-target="#change-password">
                            <i className="fi fi-rs-passport"></i>
                            Jelszó módosítása
                        </p>

                        <p className="account__tab">
                            <i className="fi fi-rs-exit"></i>
                            Kijelentkezés
                        </p>
                    </div>

                    <div className="tabs__content">
                        <div className="tab__content active-tab" id="dashboard">
                            <h3 className="tab__header"> Szia, Eszter </h3>

                            <div className="tab__body">
                                <p className="tab__description">
                                    Az admin panelről könnyen meglehet nézni és felügyelni az aktuális rendeléseket, kezelni szállításait és módosítani egyéb fióki beállításait.
                                </p>
                            </div>
                        </div>

                        <div className="tab__content" id="orders">
                            <h3 className="tab__header"> Rendelései </h3>

                            <div className="tab__body">
                                <table className="placed__order-table">
                                    <tr>
                                        <th> Rendelések </th>
                                        <th> Dátum </th>
                                        <th> Állapot </th>
                                        <th> Fizetendő </th>
                                        <th> Tevékenységek </th>
                                    </tr>

                                    <tr>
                                        <td> #2468 </td>
                                        <td> 2024 Március 8. </td>
                                        <td> Folyamatban </td>
                                        <td> 14 799 Ft. </td>
                                        <td><a href="#" className="view__order"> Megtekintés </a> </td>
                                    </tr>

                                    <tr>
                                        <td> #2366 </td>
                                        <td> 2024 Február 14. </td>
                                        <td> Befejezett </td>
                                        <td> 18 999 Ft. </td>
                                        <td><a href="#" className="view__order"> Megtekintés </a> </td>
                                    </tr>

                                    <tr>
                                        <td> #1357 </td>
                                        <td> 2024 Január 16. </td>
                                        <td> Befejezett </td>
                                        <td> 20 199 Ft. </td>
                                        <td><a href="#" className="view__order"> Megtekintés </a> </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className="tab__content" id="update-profile">
                            <h3 className="tab__header"> Fiók módosítása </h3>

                            <div className="tab__body">
                                <form className="form grid">
                                    <input type="text" className="form__input" placeholder="Felhasználónév"/>

                                    <div className="form__btn">
                                        <button className="btn btn--md"> Mentés </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="tab__content" id="address">
                            <h3 className="tab__header"> Szállítási Cím </h3>

                            <div className="tab__body">
                                <address className="address">
                                    Szabolcs-Szatmár-Bereg, <br/>
                                    4400 Nyíregyháza, <br/>
                                    Városmajor utca 4.
                                </address>
                                <a href="#" className="edit"> Módosítás </a>
                            </div>
                        </div>

                        <div className="tab__content" id="change-password">
                            <h3 className="tab__header"> Jelszó módosítása </h3>

                            <div className="tab__body">
                                <form className="form grid">
                                    <input type="password" placeholder="Jelenlegi jelszó" className="form__input"/>

                                    <input type="password" placeholder="Új jelszó" className="form__input"/>

                                    <input type="password" placeholder="Jelszó megerősítése" className="form__input"/>

                                    <div className="form__btn">
                                        <button className="btn btn--md"> Mentés </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Coupon/>
            <Footer/>
        </div>
    );
};

export default Account;