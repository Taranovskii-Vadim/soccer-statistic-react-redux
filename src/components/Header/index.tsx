import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu } from "antd";

import { PATHS } from "./constants";

// TODO иконки глянь интересные
// TODO
const Header: React.FC = (): JSX.Element => {
  const { location } = useHistory();
  return (
    <Menu mode='horizontal' defaultSelectedKeys={[location.pathname]}>
      {PATHS.map(({ id, path, label }) => (
        <React.Fragment key={id}>
          <Menu.Item key={`/${path}`}>
            <NavLink to={`/${path}`} exact={!path || false}>
              {label}
            </NavLink>
          </Menu.Item>
        </React.Fragment>
      ))}
    </Menu>
  );
};

export default Header;
