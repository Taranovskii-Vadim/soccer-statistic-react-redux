import React, { useEffect } from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header";

const App: React.FC = (): JSX.Element => {
  useEffect(() => {
    fetch("http://api.football-data.org/v2/teams/", {
      method: "GET",
      headers: { "X-Auth-Token": process.env.REACT_APP_SECRET_TOKEN || "" },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact render={() => <p>welocme</p>} />
        <Route path='/leagues' render={() => <p>leagues</p>} />
        <Route path='/teams' render={() => <p>teams</p>} />
      </Switch>
    </>
  );
};

export default App;
