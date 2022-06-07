import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies/:movie_id" component={MovieDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
