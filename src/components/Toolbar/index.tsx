import React from "react";
import { Input } from "antd";
import { Route, Switch } from "react-router";

interface IProps {
  listSearch: (value: string) => void;
}

const Toolbar: React.FC<IProps> = ({ listSearch }): JSX.Element => {
  console.log("render");
  return (
    <Switch>
      <Route path={["/", "/teams"]}>
        <Input
          style={{ width: "45%" }}
          placeholder='Введите наименование для поиска'
          onChange={e => listSearch(e.target.value)}
        />
      </Route>
    </Switch>
  );
};

export default Toolbar;
