import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchVisited } from "../actions/user";

const Visited = () => {
  const dispatch = useDispatch();
  const visited = useSelector(state => state.beach.visited);

  useEffect(() => {
    dispatch(fetchVisited());
  }, [dispatch]);

  return <GridViewBase title="Visited" beaches={visited} />;
};

export default Visited;
