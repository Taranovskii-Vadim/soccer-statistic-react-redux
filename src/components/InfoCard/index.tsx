import React from "react";
import { Card, Col } from "antd";
import { NavLink } from "react-router-dom";

interface IProps {
  cardTitle: React.ReactNode | string;
  calendarLink: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<IProps> = ({
  cardTitle,
  calendarLink,
  children,
}): JSX.Element => (
  <Col xs={24} sm={12} md={8} lg={6}>
    <Card
      title={cardTitle}
      extra={<NavLink to={calendarLink}>Календарь</NavLink>}
    >
      {children}
    </Card>
  </Col>
);
export default InfoCard;
