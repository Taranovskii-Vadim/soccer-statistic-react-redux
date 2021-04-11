import React from "react";

import CardRow from "../../../../components/CardRow";
import InfoCard from "../../../../components/InfoCard";

import { ILeague } from "../../../../store/models/leagues/types";

interface IProps {
  league: ILeague;
}

const LeagueCard: React.FC<IProps> = ({ league }): JSX.Element => {
  const { name, id, code, area, plan, numberOfAvailableSeasons } = league;

  return (
    <InfoCard
      cardTitle={`${code ? `(${code})` : ""} ${name}`}
      calendarLink={`/${id}`}
    >
      <CardRow
        title={
          <div className='cardRow__countryInfo'>
            {area.ensignUrl ? (
              <img className='cardRow__flag' src={area.ensignUrl} alt='flag' />
            ) : null}
            {area.countryCode}
          </div>
        }
        text={area.name}
      />
      <CardRow title='Доступные сезоны:' text={numberOfAvailableSeasons} />
      <CardRow title='План:' text={plan} />
    </InfoCard>
  );
};
/* {currentSeason ? (
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
        ) : null} */
export default LeagueCard;
