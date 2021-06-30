import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import Footer from "./components/footer/footer.component";
import './App.css';

const HealingPotionsPage = () => (
  <div>
    <h1>Healing Potions</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/healing-potions" component={HealingPotionsPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
