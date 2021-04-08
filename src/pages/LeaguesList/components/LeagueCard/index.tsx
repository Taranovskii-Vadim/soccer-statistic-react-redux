import { Card, Col, Typography } from "antd";
import React from "react";

import { ILeague } from "../../../../store/models/leagues/types";

import "./style.css";

const { Paragraph } = Typography;

interface IProps {
  colSpan: number;
  league: ILeague;
}

// TODO: вынести в от файл но подумай о вложенности макс 3!!!!

interface ICardRowProps {
  title: React.ReactNode | string;
  text: string | number;
}

const CardRow: React.FC<ICardRowProps> = ({ title, text }) => (
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

const LeagueCard: React.FC<IProps> = ({ colSpan, league }): JSX.Element => {
  const { name, id, code, area, plan, numberOfAvailableSeasons } = league;

  return (
    <Col span={colSpan}>
      <Card
        title={`${code ? `(${code})` : ""} ${name}`}
        extra={<a href={`/${id}`}>Календарь</a>}
      >
        <CardRow
          title={
            <div className='cardRow__countryInfo'>
              {area.ensignUrl ? (
                <img
                  className='cardRow__flag'
                  src={area.ensignUrl}
                  alt='flag'
                />
              ) : null}
              {area.countryCode}
            </div>
          }
          text={area.name}
        />
        <CardRow title='Доступные сезоны:' text={numberOfAvailableSeasons} />
        <CardRow title='План:' text={plan} />
        {/* {currentSeason ? (
          <>
            <Paragraph className='cardRow__paragraph'>Текущий сезон</Paragraph>
            <CardRow title='Дата начала:' text={currentSeason.startDate} />
            <CardRow title='Дата окончания:' text={currentSeason.endDate} />
            <CardRow
              title='Текущий день матча:'
              text={currentSeason.currentMatchday}
            />
            <CardRow
              title='Победитель'
              text={currentSeason.winner ? "yes" : "no"}
            />
          </>
        ) : null} */}
      </Card>
    </Col>
  );
};

export default LeagueCard;
