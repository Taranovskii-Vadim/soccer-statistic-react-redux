import React from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header";
import LeaguesList from "./pages/LeaguesList";

const App: React.FC = (): JSX.Element => {
  return (
    <div className='container'>
      <Header />
      <div className='container__content'>
        {/* <p>Search</p> */}
        <Switch>
          <Route path='/' exact component={LeaguesList} />
          <Route path='/teams' render={() => <p>teams</p>} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
