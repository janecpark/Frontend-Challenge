import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import Main from "./components/Main/Main";
import CardLayout from "./components/Card/CardLayout";
import Footer from "./components/Footer/Footer";

/** Renders all components */

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Main />
      <hr className="Main-divider"/>
      <CardLayout />
      <Footer />
    </div>
  );
}

export default App;
