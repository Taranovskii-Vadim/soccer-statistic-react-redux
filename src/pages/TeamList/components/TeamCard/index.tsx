import React from "react";

import { ITeam } from "../../../../store/models/teams/types";

import CardRow from "../../../../components/CardRow";
import InfoCard from "../../../../components/InfoCard";
import { Divider } from "antd";

interface IProps {
  team: ITeam;
}

const TeamCard: React.FC<IProps> = ({ team }): JSX.Element => {
  const { name, id, founded, tla, website, shortName, crestUrl, area } = team;

  return (
    <InfoCard
      key={id}
      cardTitle={
        <div>
          <img
            src={crestUrl}
            style={{ width: 50, height: 50, marginRight: 15 }}
            alt='logo'
          />
          {shortName}
        </div>
      }
      calendarLink={`/teams/${id}`}
    >
      <CardRow title='Полное имя:' text={name} />
      <CardRow title='Страна:' text={area.name} />
      <CardRow
        title='Год основания:'
        text={founded ? `${founded} г.` : "Нет данных"}
      />

      <a href={website} target='_blank'>
        О команде
      </a>
    </InfoCard>
  );
};
export default TeamCard;
