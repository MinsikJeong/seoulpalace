import React from 'react';
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
//React Router Import
import { Switch, Route } from "react-router-dom";
//Import Pages
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/details" component={Details}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
