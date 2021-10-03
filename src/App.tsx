import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category/:id">
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
