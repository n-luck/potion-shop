import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import Footer from "./components/footer/footer.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CollectionItemDetail from "./components/collection-item-detail/collection-item-detail.component";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/pdp/:pdpUrl" component={CollectionItemDetail} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
