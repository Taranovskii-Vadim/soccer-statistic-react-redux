import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { STATUS } from "../../store/constants";

import { fetchLeagues } from "../../store/models/leagues/actions";
import {
  selectLeagues,
  selectLeaguesStatus,
} from "../../store/models/leagues/selectors";
import LeagueCard from "./components/LeagueCard";

const LeaguesList: React.FC = (): JSX.Element => {
  const colSpan = 6;
  const dispatch = useDispatch();
  const leagues = useSelector(selectLeagues);
  const status = useSelector(selectLeaguesStatus);

  const isLoading = status === STATUS.loading;
  const isError = status === STATUS.error;

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Row gutter={[16, 16]}>
      {isLoading ? (
        <div>loading</div>
      ) : (
        leagues.map(item => (
          <LeagueCard key={item.id} league={item} colSpan={colSpan} />
        ))
      )}
    </Row>
  );
};

export default LeaguesList;
