import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home"
import Footer from "../common/Footer/Footer"
import About from "../about/About"
import Contact from "../contact/Contact"
import Navbar from "../common/Navbar/Navbar.js";
import Product from "../Products/Product.js";


function Pages () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages