import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchVisited } from "../actions/user";

const Visited = () => {
  const dispatch = useDispatch();
  const visited = useSelector(state => state.beach.visited);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchVisited());
      setLoaded(true);
    };
    loadData();
  }, [dispatch]);

  return <GridViewBase loaded={loaded} title="Visited" beaches={visited} />;
};

export default Visited;
