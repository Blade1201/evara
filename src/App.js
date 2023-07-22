import React from "react";
import {Routes, Route, HashRouter} from "react-router-dom";
import MainPage from "./MainPage";
import Shop from "./components/Shop";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Authentication from "./components/Authentication";
import Checkout from "./components/Checkout";
import Compare from "./components/Compare";
import Account from "./components/Account";

const App = () => {
  return (
      <div className="App">
          <HashRouter>

              <Routes>

                  <Route path = "/" element = { <MainPage/> }/>

                  <Route path = "/shop" element = { <Shop/> }/>

                  <Route path = "/compare" element = { <Compare/> }/>

                  <Route path = "/details" element = { <Details/> }/>

                  <Route path = "/cart" element = { <Cart/> }/>

                  <Route path = "/checkout" element = { <Checkout/> }/>

                  <Route path = "/wishlist" element = { <Wishlist/> }/>

                  <Route path = "/authentication" element = { <Authentication/> }/>

                  <Route path = "/account" element = { <Account/> }/>

              </Routes>

          </HashRouter>
      </div>
  );
}

export default App;