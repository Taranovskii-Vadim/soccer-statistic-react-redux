import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import { Input } from "antd";
import { useHistory } from "react-router-dom";

import { useDebounce } from "./hooks";
import { searchLeagues } from "./store/models/leagues/actions";
import { searchTeams } from "./store/models/teams/actions";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import LeaguesList from "./pages/LeaguesList";
import TeamsList from "./pages/TeamList";

const App: React.FC = (): JSX.Element => {
  // TODO хранит в себе путь на момент рендера страницы
  // TODO сделать компонент empt
  // TODO адаптив для инпутов
  // TODO закрепить шапку на мобилке или вынести в бургер
  // const { location } = useHistory();

  const dispatch = useDispatch();

  const onHandleSearch = (value: string) => {
    // TODO лучше через роутер сделать а не напрямую к бразуеру API
    if (window.location.pathname === "/teams") {
      dispatch(searchTeams(value));
    } else {
      dispatch(searchLeagues(value));
    }
  };

  // Сделаем задержку чтобы поиск отработал спустя delay после окончания ввода
  const debouncedSearch = useDebounce(onHandleSearch, 500);

  return (
    <div className='container'>
      <Header />
      <div className='container__content'>
        <div className='container__toolbar'>
          <Toolbar listSearch={debouncedSearch} />
          <Input style={{ width: "5%" }} />
        </div>
        <Switch>
          <Route path='/' exact component={LeaguesList} />
          <Route path='/teams' component={TeamsList} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
