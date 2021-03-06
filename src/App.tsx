import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductPage } from "./pages/ProductPage";
import { CartContextProvider } from "./hooks/useCart/useCart";
import { CheckoutPage } from "./pages/CheckoutPage";
function App() {
  return (
    <CartContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/category/:id">
            <CategoryPage />
          </Route>
          <Route exact path="/products/:slug">
            <ProductPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
