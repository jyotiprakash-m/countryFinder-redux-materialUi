import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navar from "./components/Navar"
import CountryListing from "./components/CountryListing"
import CountryDetails from "./components/CountryDetails"

function App() {
  return (
    <div className="App">
      <Router>
        <Navar />
        <Switch>
          <Route path="/" exact component={CountryListing} />
          <Route path="/country/:cId" component={CountryDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
