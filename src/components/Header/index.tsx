import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu } from "antd";

// TODO иконки глянь интересные
const Header: React.FC = (): JSX.Element => {
  const { location } = useHistory();
  return (
    <Menu mode='horizontal' defaultSelectedKeys={[location.pathname]}>
      <Menu.Item key='/'>
        <NavLink to='/' exact>
          Лиги
        </NavLink>
      </Menu.Item>
      <Menu.Item key='/teams'>
        <NavLink to='/teams'>Команды</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
