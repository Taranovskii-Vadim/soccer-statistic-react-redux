import React from "react";
import { Typography } from "antd";

import "./style.css";

interface IProps {
  title: React.ReactNode | string;
  text: string | number;
}

const { Paragraph } = Typography;

const CardRow: React.FC<IProps> = ({ title, text }): JSX.Element => (
  <div className='cardRow'>
    {typeof title === "string" ? (
      <Paragraph className='cardRow__paragraph'>{title}</Paragraph>
    ) : (
      title
    )}
    <Paragraph className='cardRow__paragraph' type='secondary'>
      {text}
    </Paragraph>
  </div>
);

export default CardRow;
