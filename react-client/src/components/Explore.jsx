import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridViewBase from "./GridViewBase";
import { fetchBeaches } from "../actions/beach";

const Explore = () => {
  const dispatch = useDispatch();
  const beaches = useSelector(state => state.beach.beaches);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchBeaches());
      setLoaded(true);
    };
    loadData();
  }, [dispatch]);

  return <GridViewBase loaded={loaded} title="Explore" beaches={beaches} />;
};

export default Explore;
