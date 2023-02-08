import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
