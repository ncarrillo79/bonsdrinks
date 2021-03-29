import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contato from "./components/Contato/Contato";
import Nosotime from "./components/Nosotime/Nosotime";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Footer />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contacto">
            <Contato />
          </Route>

          <Route path="/nosotime">
            <Nosotime title="Nombre" imageUrl="" />
        
          </Route>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
