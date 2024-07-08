import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProcuctProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext.js";

import { HomePage } from "./page/HomePage";
import { CartPage } from "./page/CartPage.jsx";
import { ProductDetailPage } from "./page/ProductDetailPage.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <Router>
      <ProcuctProvider>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <HomePage /> */}
            {/* </Route> */}
            <Route path="/cart" component={CartPage} />
            {/* <CartPage /> */}
            {/* </Route> */}
            <Route path="/products/:id" component={ProductDetailPage} />
            {/* <ProductDetailPage /> */}
            {/* </Route> */}
            <Route path="/users">
              <Route path="/me">my profile page</Route>
              <Route path="/:userid">user profile</Route>
            </Route>
          </Switch>
        </CartProvider>
      </ProcuctProvider>
    </Router>
  );
}

export default App;
