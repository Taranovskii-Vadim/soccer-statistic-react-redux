import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "antd";

import { STATUS } from "../../store/constants";

import { fetchTeams } from "../../store/models/teams/actions";
import { selectStatus, selectTeams } from "../../store/models/teams/selectors";

import Loader from "../../components/Loader";
import InfoCard from "../../components/InfoCard";

const TeamsList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const teams = useSelector(selectTeams);

  const status = useSelector(selectStatus);

  const isLoading = status === STATUS.loading;
  const isError = status === STATUS.error;

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row gutter={[16, 16]}>
          {teams.map(team => (
            <InfoCard
              cardTitle={team.shortName}
              calendarLink={`/teams/${team.id}`}
            >
              {team.name}
            </InfoCard>
          ))}
        </Row>
      )}
    </>
  );
};

export default TeamsList;
