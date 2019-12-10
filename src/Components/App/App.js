import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { PortfolioBenchmark } from "../PortfolioBenchmark/PortfolioBenchmark";
import { Footer } from "../Footer/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Navigation />
        <PortfolioBenchmark />
        <Footer />
      </div>
    );
  }
}

export default App;
