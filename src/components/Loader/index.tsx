import React from "react";
import { Spin } from "antd";

import "./style.css";

const Loader: React.FC = (): JSX.Element => (
  <div className='loader'>
    <Spin size='large' tip='Загрузка...' />
  </div>
);

export default Loader;
