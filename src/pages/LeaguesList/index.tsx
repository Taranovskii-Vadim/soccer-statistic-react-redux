import { Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

import { STATUS } from "../../store/constants";

import { fetchLeagues } from "../../store/models/leagues/actions";
import {
  selectStatus,
  selectLeagues,
} from "../../store/models/leagues/selectors";

import LeagueCard from "./components/LeagueCard";

const LeaguesList: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const leagues = useSelector(selectLeagues);
  const status = useSelector(selectStatus);

  const isLoading = status === STATUS.loading;
  const isError = status === STATUS.error;

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  // TODO: в тернарник закинь
  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Row gutter={[16, 16]}>
          {leagues.map(item => (
            <LeagueCard key={item.id} league={item} />
          ))}
        </Row>
      )}
    </>
  );
};

export default LeaguesList;
